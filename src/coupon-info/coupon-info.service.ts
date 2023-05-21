import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CouponInfo } from './coupon-info.entity';
import { CreateCouponInfoDto } from './dtos/create-coupon-info.dto';
import { ApprovalStatusEnum } from './enums/approval-status.enum';
import { CouponStatusEnum } from './enums/coupon-status.enum';

@Injectable()
export class CouponInfoService {
  constructor(
    @InjectRepository(CouponInfo) private repo: Repository<CouponInfo>,
  ) {}

  async create(createDto: CreateCouponInfoDto) {
    if (await this.checkExistence(createDto.vendorCode, createDto.couponCode)) {
      throw new BadRequestException('couponCode existed');
    }
    const couponInfo = this.repo.create(createDto);
    couponInfo.approvalStatus = ApprovalStatusEnum.PENDING;
    couponInfo.createdDate = new Date();
    couponInfo.isActive = false;
    couponInfo.currentVoucherCount = 0;
    couponInfo.status = CouponStatusEnum.CREATED;
    this.repo.save(couponInfo);
    return couponInfo;
  }

  findOne(id: number) {
    if (!id) return null;
    return this.repo.findOneBy({ id });
  }

  async findByVendorCodeCouponCode(vendorCode: string, couponCode: string) {
    const coupon = await this.repo.findBy({ vendorCode, couponCode });
    return coupon;
  }

  async findByVendorCode(vendorCode: string) {
    const coupon = await this.repo.findBy({ vendorCode });
    return coupon;
  }

  private async checkExistence(vendorCode: string, couponCode: string) {
    const coupon = await this.findByVendorCodeCouponCode(
      vendorCode,
      couponCode,
    );
    if (coupon) return true;
    return false;
  }
}
