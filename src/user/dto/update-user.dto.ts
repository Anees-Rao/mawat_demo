import { IsOptional } from 'class-validator';
import { CreateUserDto } from './create-user.dto';
import { MaritalStatus, Status, UserType } from '@prisma/client';

export class UpdateUserDto extends CreateUserDto {
  @IsOptional()
  userId: number;

  @IsOptional()
  email: string;

  @IsOptional()
  pinCode: number;

  @IsOptional()
  aliasName?: string;

  @IsOptional()
  ageRange?: string;

  @IsOptional()
  topics?: string;

  @IsOptional()
  status?: Status;

  @IsOptional()
  maritalStatus?: MaritalStatus;

  @IsOptional()
  profilePicture?: string;

  @IsOptional()
  avatarImage?: string;

  @IsOptional()
  securityPin?: number;

  @IsOptional()
  deviceToken?: string;

  @IsOptional()
  ngoCode?: string;

  @IsOptional()
  ngoId?: number;

  @IsOptional()
  userType?: UserType;
}
