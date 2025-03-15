import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { User } from './users/entities/user.entity';
import { PartnersModule } from './partners/partners.module';
import { Partner } from './partners/entities/partner.entity';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST', 'localhost'),
        port: configService.get('DB_PORT', 5432),
        username: configService.get('DB_USERNAME', 'postgres'),
        password: configService.get('DB_PASSWORD', 'postgres'),
        database: configService.get('DB_NAME', 'wallpaper-api'),
        entities: [User, Partner],
        synchronize: configService.get('NODE_ENV', 'development') === 'development',
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    AuthModule,
    PartnersModule,
  ],
  controllers: [],
})
export class AppModule { }
