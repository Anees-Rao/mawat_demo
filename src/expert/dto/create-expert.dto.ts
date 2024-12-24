import { IsEmail, IsEnum, IsInt, IsOptional, IsString, IsBoolean, Min, IsNumber, ValidateNested, IsArray } from 'class-validator';
import { ExpertStatus, ConsultantType } from '@prisma/client';
import { Type } from 'class-transformer';

class LanguageDto {
  @IsInt()
  languageId: number;
}

export class CreateExpertDto {
  @IsInt()
  @Min(1)
  expertId: number;

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsOptional()
  degree?: string;

  @IsString()
  @IsOptional()
  certification?: string;

  @IsString()
  @IsOptional()
  specialty?: string;

  @IsString()
  @IsOptional()
  experience?: string;

  @IsString()
  @IsOptional()
  gender?: string;

  @IsEnum(ExpertStatus)
  @IsOptional()
  expertStatus?: ExpertStatus;

  @IsEnum(ConsultantType)
  @IsOptional()
  consultantType?: ConsultantType;

  @IsString()
  @IsOptional()
  phone?: string;

  @IsString()
  @IsOptional()
  profileImage?: string;

  @IsString()
  @IsOptional()
  rating?: string;

  @IsString()
  @IsOptional()
  affiliatedNgo?: string;

  @IsString()
  @IsOptional()
  averageResponseTime?: string;

  @IsInt()
  @IsOptional()
  pinCode?: number;

  @IsBoolean()
  @IsOptional()
  profileRejection?: boolean;

  @IsString()
  @IsOptional()
  rejectionReason?: string;

  @IsNumber()
  @IsOptional()
  degreeId?: number;

  @IsNumber()
  @IsOptional()
  majorId?: number;

  @IsNumber()
  @IsOptional()
  adminId?: number;

  @IsString()
  @IsOptional()
  document?: string;

  @IsString()
  @IsOptional()
  video?: string;

  @IsString()
  @IsOptional()
  deviceToken?: string;

  @IsBoolean()
  @IsOptional()
  audioCall?: boolean;

  @IsString()
  @IsOptional()
  audioCallPrice?: string;

  @IsBoolean()
  @IsOptional()
  videoCall?: boolean;

  @IsString()
  @IsOptional()
  videoCallPrice?: string;

  @IsBoolean()
  @IsOptional()
  chatCall?: boolean;

  @IsString()
  @IsOptional()
  inviteLink?: string;

  @IsNumber()
  locationId?: number

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => LanguageDto)
  languages?: LanguageDto[];
}
