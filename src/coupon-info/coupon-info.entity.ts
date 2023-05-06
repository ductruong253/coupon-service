import { Entity, PrimaryGeneratedColumn, Column, Timestamp } from 'typeorm'
import { ApprovalStatusEnum } from './enums/approval-status.enum'
import { CouponTypeEnum } from './enums/coupon-type.enum'
import { CurrencyEnum } from './enums/currency.enum'

@Entity()
export class CouponInfo {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    description: string
    @Column()
    vendorCode: string
    @Column()
    startDate: Date
    @Column()
    endDate: Date
    @Column()
    createdDate: Date
    @Column()
    couponCode: string
    @Column()
    approvalStatus: ApprovalStatusEnum
    @Column()
    isActive: boolean
    @Column()
    currentVoucherCount: number
    @Column()
    voucherLimit: number
    @Column()
    conditions: string
    @Column()
    type: CouponTypeEnum
    @Column()
    discountValue: number
    @Column()
    unit: CurrencyEnum
    @Column()
    discountPercent: number
}