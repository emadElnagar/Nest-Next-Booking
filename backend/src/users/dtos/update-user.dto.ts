import { PartialType } from '@nestjs/mapped-types';
import { CreateUser } from './new-user.dto';

export class updateUserDto extends PartialType(CreateUser) {
  image?: string;
}
