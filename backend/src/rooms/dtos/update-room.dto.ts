import { PartialType } from '@nestjs/mapped-types';
import { CreateRoom } from './new-room.dto';

export class updateRoomDto extends PartialType(CreateRoom) {}
