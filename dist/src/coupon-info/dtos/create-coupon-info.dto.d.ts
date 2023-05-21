import { CouponTypeEnum } from '../enums/coupon-type.enum';
import { CurrencyEnum } from '../enums/currency.enum';
export declare class CreateCouponInfoDto {
    description: string;
    vendorCode: string;
    startDate: Date;
    endDate: Date;
    couponCode: string;
    voucherLimit: number;
    conditions: string;
    type: CouponTypeEnum;
    maxDiscountValue: number;
    unit: CurrencyEnum;
    discountPercent: number;
    createdBy: string;
}
