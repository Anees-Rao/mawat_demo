import { IsEmail, IsEnum, IsInt, IsNumber, IsOptional, IsString, Min, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { Status, UserType, MaritalStatus } from '@prisma/client';

class LanguageDto {
  @IsInt()
  languageId: number;
}

export class CreateUserDto {
  @IsInt()
  @Min(4)
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

  @IsNumber()
  @IsOptional()
  locationId?: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => LanguageDto)
  languages?: LanguageDto[];
}
