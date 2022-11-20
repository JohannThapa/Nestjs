import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { GenderEnum } from 'src/common/enums/gender.enum';

export class CreateStudentDto {
  @ApiProperty()
  @Type(() => Number)
  @IsNumber()
  id: number;

  @ApiProperty({
    type: String,
  })
  @IsNotEmpty()
  @MinLength(3)
  name: string;

  @ApiProperty({
    type: String,
  })
  @IsString()
  phone: string;

  @ApiProperty({
    type: String,
  })
  @IsString()
  email: string;

  @ApiProperty({
    type: String,
  })
  @IsString()
  address: string;

  @ApiProperty({
    type: Number,
  })
  @IsNotEmpty()
  @IsNumber()
  age: number;

  @ApiProperty({
    enum: GenderEnum,
    example: GenderEnum.male,
  })
  @IsString()
  @IsEnum(GenderEnum)
  gender: GenderEnum;

  @ApiProperty({
    type: String,
  })
  @IsString()
  class: string;

  @ApiProperty({
    type: Number,
  })
  @IsNotEmpty()
  @IsNumber()
  rollNo: number;
}
