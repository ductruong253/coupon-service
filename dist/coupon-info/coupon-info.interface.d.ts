import { Document } from "mongoose";
export interface ICouponInfo extends Document {
    readonly description: string;
    readonly vendorCode: string;
    readonly startDate: Date;
    readonly endDate: Date;
    readonly durationHr: number;
    readonly createdDate: Date;
    readonly createdBy: string;
    readonly couponCode: string;
    readonly approvalStatus: boolean;
    readonly status: string;
    readonly currentCount: number;
    readonly couponLimit: number;
    readonly conditions: string;
    readonly type: string;
    readonly maxDiscountValue: number;
    readonly unit: string;
    readonly discountPercent: number;
}
