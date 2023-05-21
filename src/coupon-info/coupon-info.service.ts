import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CouponInfo } from './coupon-info.entity';
import { CreateCouponInfoDto } from './dtos/create-coupon-info.dto';

@Injectable()
export class CouponInfoService {

    constructor(@InjectRepository(CouponInfo) private repo: Repository<CouponInfo>) {

    }

    create(createDto: CreateCouponInfoDto) {
        const couponInfo = this.repo.create(createDto)
        return this.repo.save(couponInfo)
    }

    findOne(id: number) {
        if (!id) return null
        return this.repo.findOneBy({id});
    }

    private coupons: CouponInfo[] = [
        { id: 1, description: 'COUPON_10%', vendorCode: 'phuclong01' },
        { id: 2, description: 'COUPON_FreeShip', vendorCode: 'phuclong02' },
        { id: 3, description: 'COUPON1_Return', vendorCode: 'phuclong03' },
        { id: 4, description: 'COUPON1_30%', vendorCode: 'phuclong04' },
      ];
    
    getCouponsByBrandCode(vendorCode: string): CouponInfo[] {
        return this.coupons.filter(coupon => coupon.vendorCode === vendorCode);
      }
}
