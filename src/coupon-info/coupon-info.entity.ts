import { Entity, PrimaryGeneratedColumn, Column, Timestamp } from 'typeorm';
import { ApprovalStatusEnum } from './enums/approval-status.enum';
import { CouponTypeEnum } from './enums/coupon-type.enum';
import { CurrencyEnum } from './enums/currency.enum';
import { CouponStatusEnum } from './enums/coupon-status.enum';

@Entity()
export class CouponInfo {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  description: string;
  @Column()
  vendorCode: string;
  @Column()
  startDate: Date;
  @Column()
  endDate: Date;
  @Column()
  createdDate: Date;
  @Column()
  couponCode: string;
  @Column()
  approvalStatus: ApprovalStatusEnum;
  @Column()
  isActive: boolean;
  @Column()
  status: CouponStatusEnum;
  @Column()
  currentVoucherCount: number;
  @Column()
  voucherLimit: number;
  @Column()
  conditions: string;
  @Column()
  type: CouponTypeEnum;
  @Column()
  maxDiscountValue: number;
  @Column()
  unit: CurrencyEnum;
  @Column()
  discountPercent: number;
}
