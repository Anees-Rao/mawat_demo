import { PartialType } from '@nestjs/mapped-types';
import { CreateExpertLocationDto } from './create-expert-location.dto';

export class UpdateExpertLocationDto extends PartialType(CreateExpertLocationDto) {}
