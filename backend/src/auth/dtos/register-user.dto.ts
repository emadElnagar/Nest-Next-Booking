import { Transform } from 'class-transformer';
import { IsEmail, IsString, MinLength } from 'class-validator';
import { IsStrongPassword } from '../decorators/is-strong-password.decorator';

export class RegisterDto {
  @Transform(({ value }) => value?.trim())
  @IsString()
  @MinLength(3)
  firstName: string;

  @Transform(({ value }) => value?.trim())
  @IsString()
  @MinLength(3)
  lastName: string;

  @Transform(({ value }) => value?.trim())
  @IsEmail()
  email: string;

  @IsString()
  @IsStrongPassword()
  password: string;
}
