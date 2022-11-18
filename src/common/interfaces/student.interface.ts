import { GenderEnum } from '../enums/gender.enum';

export interface IStudent {
  id: number;
  name: string;
  age: number;
  gender?: GenderEnum;
  class?: string;
  rollNo?: number;
  address?: string;
  phone?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
