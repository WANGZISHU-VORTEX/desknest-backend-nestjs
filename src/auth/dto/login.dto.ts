import { IsString, MinLength, MaxLength } from 'class-validator';

export class LoginDto {
  @IsString({ message: 'Username must be a string' })
  username: string;

  @IsString({ message: 'Password must be a string' })
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  @MaxLength(20, { message: 'Password must not exceed 20 characters' })
  password: string;
}
