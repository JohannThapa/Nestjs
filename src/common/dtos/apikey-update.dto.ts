import { PartialType } from '@nestjs/swagger';
import { ApiKeyCreateDto } from './apikey-create.dto';

export class ApiKeyUpdateDto extends PartialType(ApiKeyCreateDto) {}
