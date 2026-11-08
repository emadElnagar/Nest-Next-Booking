import { Module } from '@nestjs/common';
import { RoomTypesController } from './room-type.controller';
import { RoomTypesService } from './room-type.service';

@Module({
  controllers: [RoomTypesController],
  providers: [RoomTypesService],
})
export class RoomTypeModule {}
