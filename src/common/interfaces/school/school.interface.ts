import { SchoolTypeEnum } from 'src/common/enums/school-type.enum';

export interface ISchool {
  id: number;
  name: string;
  description: number;
  type: SchoolTypeEnum;
  address?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
