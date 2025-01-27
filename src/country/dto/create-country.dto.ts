import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCountryDto {
    @IsString()
    @IsNotEmpty()
    country: string;
} 