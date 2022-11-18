export class StudentModel {
  id: string;
  name: string;
  age = 10;
  constructor(id: string, name: string, age: number) {
    this.name = name;
    this.id = id;
    this.age = age;
  }
}
