import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

export class GetStudentBodyDto {
  @ApiProperty({ type: Number })
  @IsNumber()
  id?: number;

  @ApiProperty({ type: String })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiPropertyOptional()
  @IsString()
  gender?: string;

  @ApiPropertyOptional()
  @IsString()
  class?: string;

  @ApiPropertyOptional()
  @IsNumber()
  rollNo?: number;

  @ApiPropertyOptional()
  @IsNumber()
  age?: number;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  address?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  phone?: string;

  @ApiPropertyOptional()
  @IsDate()
  @IsOptional()
  createdAt?: Date;

  @ApiPropertyOptional()
  @IsDate()
  @IsOptional()
  updatedAt?: Date;
}
