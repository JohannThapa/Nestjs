import { ENUM_LOGGER_LEVEL } from '../constants/logger.enum';

export interface ILoggerOptions {
  description?: string;
  tags?: string[];
  level?: ENUM_LOGGER_LEVEL;
}
