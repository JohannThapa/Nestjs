import { Injectable } from '@nestjs/common';
import { IStudent } from 'src/interfaces/student.interface';
import { StudentModel } from 'src/models/student.model';

@Injectable()
export class StudentService {
  students: IStudent[] = [];
  insertStudent(name: string, age: number) {
    const studentId: string = new Date().toString();
    const newStudent = new StudentModel(studentId, name, age);
    this.students.push(newStudent);
    return studentId;
  }
  getAll(): any {
    return [...this.students];
  }
}
