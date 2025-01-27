import { IsNotEmpty, IsString } from "class-validator";

export class CreateLanguageDto {
    @IsString()
    @IsNotEmpty()
    language: string;
}

