export interface ResponseOption {
  hasTotal?: boolean;
  total?: number;
  skip?: number;
  limit?: number;
  sort?: object | string;
}
