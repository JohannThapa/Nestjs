import { PartialType } from '@nestjs/swagger';
import { ENUM_REQUEST_METHOD } from 'src/common/request/enums/request.enum';
import { ENUM_LOGGER_LEVEL } from '../constants/logger.enum';

export class CreateLoggerDto {
  id: number;
  description: string;
  level: string;
  context: string;
  method: ENUM_REQUEST_METHOD;
  path: string;
  params?: Record<string, any>;
  bodies?: Record<string, any>;
  statusCode?: number;
}

export class LoggerCreateRawDto extends PartialType(CreateLoggerDto) {
  level: ENUM_LOGGER_LEVEL;
}
