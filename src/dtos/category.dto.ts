import { IsBoolean, IsString } from "class-validator";

export class CreateCategoryDto {

    @IsString()
    name: string;

    @IsBoolean()
    status: boolean;
}

export class UpdateCategoryDto {

    @IsString()
    name: string;

    @IsBoolean()
    status: boolean;
}