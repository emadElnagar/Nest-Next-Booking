import {
  ArrayNotEmpty,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class NewRoomTypeDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description?: string | null;

  @IsString()
  @IsNotEmpty()
  bedType: string;

  @IsNotEmpty()
  capacity: number;

  @IsNumber()
  @IsNotEmpty()
  maxChildren?: number;

  @IsString()
  @IsNotEmpty()
  basePrice: string;

  @IsArray()
  @ArrayNotEmpty()
  amenities?: string[] | null;
}
