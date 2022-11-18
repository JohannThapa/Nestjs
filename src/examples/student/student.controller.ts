import { Body, Controller, Get, Post } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}
  @Post()
  addStudent(
    // @Body() completeBody: {name: string, age: number},
    @Body('name') studentName: string,
    @Body('age') studentAge: number,
  ): any {
    const generatedId = this.studentService.insertStudent(
      studentName,
      studentAge,
    );
    return { id: generatedId };
    // return this.studentService.insertStudent(studentName, studentAge);
  }

  @Get()
  getAll(): string {
    return this.studentService.getAll();
  }
}
