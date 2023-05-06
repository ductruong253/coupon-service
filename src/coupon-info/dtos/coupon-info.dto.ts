import { Expose } from "class-transformer"
import { ApprovalStatusEnum } from "../enums/approval-status.enum"
import { CouponTypeEnum } from "../enums/coupon-type.enum"
import { CurrencyEnum } from "../enums/currency.enum"

export class CouponInfoDto {
    @Expose()
    id: number
    @Expose()
    description: string
    @Expose()
    vendorCode: string
    @Expose()
    startDate: Date
    @Expose()
    endDate: Date
    @Expose()
    createdDate: Date
    @Expose()
    couponCode: string
    @Expose()
    approvalStatus: ApprovalStatusEnum
    @Expose()
    isActive: boolean
    @Expose()
    currentVoucherCount: number
    @Expose()
    voucherLimit: number
    @Expose()
    conditions: string
    @Expose()
    type: CouponTypeEnum
    @Expose()
    discountValue: number
    @Expose()
    unit: CurrencyEnum
    @Expose()
    discountPercent: number
}