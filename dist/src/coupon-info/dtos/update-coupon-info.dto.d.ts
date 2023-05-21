import { CouponTypeEnum } from '../enums/coupon-type.enum';
import { CurrencyEnum } from '../enums/currency.enum';
import { CouponStatusEnum } from '../enums/coupon-status.enum';
export declare class UpdateCouponInfoDto {
    description: string;
    vendorCode: string;
    startDate: Date;
    endDate: Date;
    couponCode: string;
    voucherLimit: number;
    conditions: string;
    type: CouponTypeEnum;
    status: CouponStatusEnum;
    maxDiscountValue: number;
    unit: CurrencyEnum;
    discountPercent: number;
}
