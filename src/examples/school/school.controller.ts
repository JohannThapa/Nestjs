import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { SchoolService } from './school.service';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import {
  SchoolErrorResponseDto,
  SchoolSuccessResponseDto,
} from './dto/school-response.dto';
import { success } from 'src/common/response/success';

@Controller('school')
@ApiTags('school')
export class SchoolController {
  constructor(private readonly schoolService: SchoolService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createSchoolDto: CreateSchoolDto) {
    return this.schoolService.create(createSchoolDto);
  }

  @Get()
  findAll() {
    return this.schoolService.findAll();
  }
  @Get()
  @ApiOperation({
    summary: 'Fetch all schools',
  })
  @ApiOkResponse({
    type: SchoolErrorResponseDto,
  })
  @ApiBadRequestResponse({
    type: SchoolSuccessResponseDto,
  })
  public async getAll(@Res() res: Response): Promise<void> {
    const rs = await this.schoolService.getAll();
    res.status(HttpStatus.OK).json(success(rs));
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.schoolService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSchoolDto: UpdateSchoolDto) {
    return this.schoolService.update(+id, updateSchoolDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.schoolService.remove(+id);
  }
}
