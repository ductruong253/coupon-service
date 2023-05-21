import { IsDate, IsEnum, IsNumber, IsString, Max, Min } from 'class-validator';
import { CouponTypeEnum } from '../enums/coupon-type.enum';
import { CurrencyEnum } from '../enums/currency.enum';
import { Type } from 'class-transformer';

export class CreateCouponInfoDto {
    @IsString()
    description: string
}
