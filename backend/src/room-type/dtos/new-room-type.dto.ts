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

  @IsNumber()
  @IsNotEmpty()
  capacity: number;

  @IsNumber()
  @IsNotEmpty()
  maxChildren?: number;

  @IsNumber()
  @IsNotEmpty()
  basePrice: number;

  @IsArray()
  @ArrayNotEmpty()
  amenities?: string[] | null;
}
