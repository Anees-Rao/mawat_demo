import { IsEmail, IsNumber, IsOptional, IsString } from 'class-validator';
import { CreateExpertDto } from './create-expert.dto';
import { ExpertStatus } from '@prisma/client';

export class UpdateExpertDto extends CreateExpertDto {
  @IsNumber()
  expertId: number;

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsOptional()
  degree?: string;

  @IsOptional()
  certification?: string;

  @IsOptional()
  specialty?: string;

  @IsOptional()
  experience?: string;

  @IsOptional()
  gender?: string;

  @IsOptional()
  expertStatus?: ExpertStatus;

  @IsOptional()
  phone?: string;

  @IsOptional()
  profileImage?: string;

  @IsOptional()
  rating?: string;

  @IsOptional()
  affiliatedNgo?: string;

  @IsOptional()
  averageResponseTime?: string;

  @IsOptional()
  pinCode?: number;

  @IsOptional()
  profileRejection?: boolean;

  @IsOptional()
  rejectionReason?: string;

  @IsOptional()
  degreeId?: number;

  @IsOptional()
  majorId?: number;

  @IsOptional()
  adminId?: number;

  @IsOptional()
  document?: string;

  @IsOptional()
  video?: string;

  @IsOptional()
  deviceToken?: string;

  @IsOptional()
  audioCall?: boolean;

  @IsOptional()
  audioCallPrice?: string;

  @IsOptional()
  videoCall?: boolean;

  @IsOptional()
  videoCallPrice?: string;

  @IsOptional()
  chatCall?: boolean;

  @IsOptional()
  inviteLink?: string;

  locationId: number;
}
