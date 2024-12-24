import { IsEmail, IsEnum, IsInt, IsOptional, IsString, Min } from 'class-validator';
import { Status, UserType, MaritalStatus } from '@prisma/client';

export class CreateUserDto {
  @IsInt()
  @Min(1)
  userId: number;

  @IsEmail()
  email: string;

  @IsString()
  @IsOptional()
  aliasName?: string;

  @IsString()
  @IsOptional()
  ageRange?: string;

  @IsString()
  @IsOptional()
  topics?: string;

  @IsEnum(Status)
  @IsOptional()
  status?: Status;

  @IsEnum(MaritalStatus)
  @IsOptional()
  maritalStatus?: MaritalStatus;

  @IsInt()
  pinCode: number;

  @IsString()
  @IsOptional()
  profilePicture?: string;

  @IsString()
  @IsOptional()
  avatarImage?: string;

  @IsInt()
  @IsOptional()
  securityPin?: number;

  @IsString()
  @IsOptional()
  deviceToken?: string;

  @IsString()
  @IsOptional()
  ngoCode?: string;

  @IsInt()
  @IsOptional()
  ngoId?: number;

  @IsEnum(UserType)
  @IsOptional()
  userType?: UserType;
}
