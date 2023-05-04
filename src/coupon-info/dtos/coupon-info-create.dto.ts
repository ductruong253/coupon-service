import { IsString } from "class-validator"

export class CreateCouponDto {

    @IsString()
    readonly description: string
    
    @IsString()
    readonly vendorCode: string
    
    readonly startDate: Date
    
    readonly endDate: Date
    
    readonly durationHr: number
    
    readonly createdDate: Date
    
    @IsString()
    readonly createdBy: string

    @IsString()
    readonly couponCode: string
    
    readonly approvalStatus: boolean
    
    @IsString()
    readonly status: string
    
    readonly currentCount: number
    
    readonly couponLimit: number
    
    @IsString()
    readonly conditions: string
    
    @IsString()
    readonly type: string
    
    readonly maxDiscountValue: number
    
    @IsString()
    readonly unit: string
    
    readonly discountPercent: number
}