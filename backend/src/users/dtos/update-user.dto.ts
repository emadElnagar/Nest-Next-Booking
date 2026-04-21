import { PartialType } from '@nestjs/mapped-types';
import { userRegisterDto } from './register-user.dto';

export class updateUserDto extends PartialType(userRegisterDto) {
  image?: string;
}
