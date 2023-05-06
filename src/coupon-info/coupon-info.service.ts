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
}
