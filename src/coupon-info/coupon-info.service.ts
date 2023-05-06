import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Repository, Timestamp } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CouponInfo } from './coupon-info.entity';
import { CreateCouponInfoDto } from './dtos/create-coupon-info.dto';
import { ApprovalStatusEnum } from './enums/approval-status.enum';

@Injectable()
export class CouponInfoService {

    constructor(@InjectRepository(CouponInfo) private repo: Repository<CouponInfo>) {

    }

    async create(createDto: CreateCouponInfoDto) {
        console.log(this.checkExistence(createDto.couponCode))
        if (await this.checkExistence(createDto.couponCode)) {
            throw new BadRequestException('couponCode existed')
        }
        const couponInfo = this.repo.create(createDto)
        couponInfo.approvalStatus = ApprovalStatusEnum.PENDING;
        couponInfo.createdDate = new Date()
        couponInfo.isActive = false
        couponInfo.currentVoucherCount = 0;
        this.repo.save(couponInfo)
        return couponInfo
    }

    findOne(id: number) {
        if (!id) return null
        return this.repo.findOneBy({id});
    }

    async findByCouponCode(couponCode: string) {
        const coupon = await this.repo.findOneBy({couponCode})
        return coupon
    }

    private async checkExistence(couponCode: string) {
        const coupon = await this.findByCouponCode(couponCode);
        console.log('Coupon:' + coupon)
        if (coupon) return true
        return false
    }
}
