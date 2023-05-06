import { ApprovalStatusEnum } from "../enums/approval-status.enum";
import { CouponTypeEnum } from "../enums/coupon-type.enum";
import { CurrencyEnum } from "../enums/currency.enum";
import { CouponStatusEnum } from "../enums/coupon-status.enum";
export declare class CouponInfoDto {
    id: number;
    description: string;
    vendorCode: string;
    startDate: Date;
    endDate: Date;
    createdDate: Date;
    couponCode: string;
    approvalStatus: ApprovalStatusEnum;
    status: CouponStatusEnum;
    isActive: boolean;
    currentVoucherCount: number;
    voucherLimit: number;
    conditions: string;
    type: CouponTypeEnum;
    maxDiscountValue: number;
    unit: CurrencyEnum;
    discountPercent: number;
}
