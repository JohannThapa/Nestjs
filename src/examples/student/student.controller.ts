import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { Response } from 'express';
import { success } from 'src/common/response/success';
import { CreateStudentDto } from './dto/create.dto';
import {
  StudentErrorResponseDto,
  StudentSuccessResponseDto,
} from './dto/response.dto';
import { StudentService } from './student.service';

@Controller('student')
@ApiTags('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  @UsePipes(ValidationPipe)
  createUsers(@Body() createStudentDto: CreateStudentDto) {
    return this.studentService.createStudent(createStudentDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Fetch all students',
  })
  @ApiOkResponse({
    type: StudentErrorResponseDto,
  })
  @ApiBadRequestResponse({
    type: StudentSuccessResponseDto,
  })
  public async getAll(@Res() res: Response): Promise<void> {
    const rs = await this.studentService.getAll();
    res.status(HttpStatus.OK).json(success(rs));
  }
}
