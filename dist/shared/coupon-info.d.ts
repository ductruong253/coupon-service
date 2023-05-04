export interface CouponInfo {
    description: string;
    vendorCode: string;
    startDate: Date;
    endDate: Date;
    durationHr: number;
    createdDate: Date;
    createdBy: string;
    couponCode: string;
    approvalStatus: boolean;
    status: string;
    currentCount: number;
    couponLimit: number;
    conditions: string;
    type: string;
    maxDiscountValue: number;
    unit: string;
    discountPercent: number;
}
