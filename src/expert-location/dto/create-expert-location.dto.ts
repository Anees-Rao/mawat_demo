import { IsNumber, IsOptional } from "class-validator";

export class CreateExpertLocationDto {
        @IsNumber()
        @IsOptional()
        cityId?: number;
    
        @IsNumber()
        @IsOptional()
        countryId?: number;
    
        @IsNumber()
        @IsOptional()
        expertId?: number;
    
        @IsNumber()
        @IsOptional()
        ngoId?: number;
}
