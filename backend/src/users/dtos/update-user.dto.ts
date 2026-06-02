import { PartialType } from '@nestjs/mapped-types';
import { CraeteUser } from './new-user.dto';

export class updateUserDto extends PartialType(CraeteUser) {
  image?: string;
}
