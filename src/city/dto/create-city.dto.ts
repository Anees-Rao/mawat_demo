import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCityDto {
    @IsString()
    @IsNotEmpty()
    city: string;
} 