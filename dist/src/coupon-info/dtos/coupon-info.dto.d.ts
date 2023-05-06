import { ApprovalStatusEnum } from "../enums/approval-status.enum";
import { CouponTypeEnum } from "../enums/coupon-type.enum";
import { CurrencyEnum } from "../enums/currency.enum";
export declare class CouponInfoDto {
    id: number;
    description: string;
    vendorCode: string;
    startDate: Date;
    endDate: Date;
    createdDate: Date;
    couponCode: string;
    approvalStatus: ApprovalStatusEnum;
    isActive: boolean;
    currentVoucherCount: number;
    voucherLimit: number;
    conditions: string;
    type: CouponTypeEnum;
    discountValue: number;
    unit: CurrencyEnum;
    discountPercent: number;
}
