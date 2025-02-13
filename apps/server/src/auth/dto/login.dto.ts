import { IsEmail, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    description: 'User email address',
    example: "admin@example.com",
    required: true
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'User password - minimum 6 characters',
    example: "admin123",
    required: true,
    minLength: 6
  })
  @IsString()
  @MinLength(6)
  password: string;
}