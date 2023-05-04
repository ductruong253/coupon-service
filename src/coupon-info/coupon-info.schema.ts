import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"

@Schema()
export class CouponInfo {

    id: string;
    @Prop()
    description: string
    @Prop()
    vendorCode: string
    @Prop()
    startDate: Date
    @Prop()
    endDate: Date
    @Prop()
    durationHr: number
    @Prop()
    createdDate: Date
    @Prop()
    createdBy: string
    @Prop()
    couponCode: string
    @Prop()
    approvalStatus: boolean
    @Prop()
    status: string
    @Prop()
    currentCount: number
    @Prop()
    couponLimit: number
    @Prop()
    conditions: string
    @Prop()
    type: string
    @Prop()
    maxDiscountValue: number
    @Prop()
    unit: string
    @Prop()
    discountPercent: number
}

export const CouponInfoSchema = SchemaFactory.createForClass(CouponInfo)