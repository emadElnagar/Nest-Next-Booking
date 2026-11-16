import { Module } from '@nestjs/common';
import { RoomTypesController } from './room-type.controller';
import { RoomTypesService } from './room-type.service';
import { RoomType } from './room-type.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([RoomType])],
  controllers: [RoomTypesController],
  providers: [RoomTypesService],
  exports: [RoomTypesService],
})
export class RoomTypeModule {}
