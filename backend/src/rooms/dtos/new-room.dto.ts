import {
  ArrayNotEmpty,
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateRoomDto {
  @IsNumber()
  @IsNotEmpty()
  roomNumber: number;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsArray()
  @ArrayNotEmpty()
  images: string[];

  @IsString()
  @IsNotEmpty()
  type: string;

  @IsNumber()
  @IsNotEmpty()
  capacity: number;

  @IsNumber()
  @IsNotEmpty()
  adults: number;

  @IsNumber()
  children: number;

  @IsNumber()
  @IsNotEmpty()
  pricePerNight: number;

  @IsBoolean()
  isAvailable: boolean;
}
