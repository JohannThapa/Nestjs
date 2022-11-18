/* eslint-disable @typescript-eslint/no-unused-vars */
import { ResponseOption } from '../interfaces/response-option/response-option.interface';
import { SuccessResponse } from '../interfaces/success-response/success-response.interface';

export function success(
  result: object | object[] | boolean,
  options?: ResponseOption,
): SuccessResponse {
  const response: SuccessResponse = {
    success: true,
    result: result,
  };
  return response;
}
