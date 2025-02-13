import { Injectable, UnauthorizedException, ForbiddenException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { User, UserRole } from '../users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string, role?: UserRole): Promise<User> {
    const user = await this.usersService.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await this.usersService.validatePassword(
      user,
      password,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    if (role && user.role !== role) {
      throw new ForbiddenException('Access denied');
    }

    return user;
  }

  async validateAdminLogin(email: string, password: string): Promise<User> {
    const hasAdmin = await this.usersService.hasAnyAdmin();

    if (!hasAdmin) {
      // Create first admin
      const user = await this.usersService.create({
        email,
        password,
        role: UserRole.ADMIN,
      });
      return user;
    }

    return this.validateUser(email, password, UserRole.ADMIN);
  }

  async adminLogin(email: string, password: string) {
    const user = await this.validateAdminLogin(email, password);
    return this.login(user);
  }

  async customerLogin(email: string, password: string) {
    const user = await this.validateUser(email, password, UserRole.CUSTOMER);
    if (user.role === UserRole.ADMIN) {
      throw new ForbiddenException('Please use admin login endpoint');
    }
    
    return this.login(user);
  }

  async login(user: User) {
    const payload = { sub: user.id, email: user.email, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        firstName: user.firstName,
        lastName: user.lastName,
      },
    };
  }
}