import { GenderEnum } from 'src/common/enums/gender.enum';
import { IStudent } from 'src/common/interfaces/student.interface';

export class StudentModel implements IStudent {
  id: number;
  name: string;
  age = 10;
  createdAt: Date;
  gender: GenderEnum;
  class: string;
  rollNo: number;
  address: string;
  phone: string;
  email: string;
  updatedAt: Date;
  constructor(
    id: string,
    name: string,
    age: number,
    gender: GenderEnum,
    rollNo: number,
    className: string,
    address: string,
    phone: string,
    email: string,
  ) {
    this.name = name;
    this.id = Date.parse(id);
    this.age = age;
    this.createdAt = new Date(id);
    this.gender = gender;
    this.rollNo = rollNo;
    this.class = className;
    this.address = address;
    this.phone = phone;
    this.email = email;
    this.updatedAt = new Date(id);
  }
}
