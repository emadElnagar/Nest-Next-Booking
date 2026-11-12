import { PartialType } from '@nestjs/mapped-types';
import { CreateRoomTypeDto } from './new-room-type.dto';

export class UpdateRoomTypeDto extends PartialType(CreateRoomTypeDto) {}
