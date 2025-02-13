import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LoginDto } from 'src/auth/dto/login.dto';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('admin/login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Admin login',
    description: 'Login endpoint for administrators. Creates first admin if no admins exist.',
  })
  @ApiBody({
    type: LoginDto,
    description: 'Admin credentials',
    examples: {
      admin: {
        summary: 'Admin Login Example',
        description: 'A sample admin login request',
        value: {
          email: 'admin@example.com',
          password: 'admin123',
        },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully logged in',
    schema: {
      example: {
        access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
        user: {
          id: '123e4567-e89b-12d3-a456-426614174000',
          email: 'admin@example.com',
          role: 'admin',
          firstName: 'John',
          lastName: 'Doe',
        },
      },
    },
  })
  @ApiResponse({ status: 401, description: 'Invalid credentials' })
  @ApiResponse({ status: 403, description: 'Access denied - not an admin user' })
  async adminLogin(@Body() loginDto: LoginDto) {
    return this.authService.adminLogin(
      loginDto.email,
      loginDto.password,
    );
  }

  @Post('customer/login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Customer login',
    description: 'Login endpoint for customers.',
  })
  @ApiBody({
    type: LoginDto,
    description: 'Customer credentials',
    examples: {
      customer: {
        summary: 'Customer Login Example',
        description: 'A sample customer login request',
        value: {
          email: 'customer@example.com',
          password: 'customer123',
        },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully logged in',
    schema: {
      example: {
        access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
        user: {
          id: '123e4567-e89b-12d3-a456-426614174001',
          email: 'customer@example.com',
          role: 'customer',
          firstName: 'Jane',
          lastName: 'Smith',
        },
      },
    },
  })
  @ApiResponse({ status: 401, description: 'Invalid credentials' })
  @ApiResponse({ status: 403, description: 'Access denied - admin users should use /admin/login' })
  async customerLogin(@Body() loginDto: LoginDto) {
    return this.authService.customerLogin(loginDto.email, loginDto.password);
  }
}