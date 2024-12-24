import { IsNumber, IsOptional } from 'class-validator';

export class CreateLocationDto {
    @IsNumber()
    @IsOptional()
    cityId?: number;

    @IsNumber()
    @IsOptional()
    countryId?: number;

    @IsNumber()
    @IsOptional()
    userId?: number;

    @IsNumber()
    @IsOptional()
    ngoId?: number;
}
