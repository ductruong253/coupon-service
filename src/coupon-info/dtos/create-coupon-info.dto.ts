import { IsString } from "class-validator";

export class CreateCouponInfoDto {
    @IsString()
    description: string
}