import { PartialType } from '@nestjs/mapped-types';
import { CreateRoomDto } from './new-room.dto';

export class UpdateRoomDto extends PartialType(CreateRoomDto) {}
