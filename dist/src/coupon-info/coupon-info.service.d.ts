import { Repository } from 'typeorm';
import { CouponInfo } from './coupon-info.entity';
import { CreateCouponInfoDto } from './dtos/create-coupon-info.dto';
export declare class CouponInfoService {
    private repo;
    constructor(repo: Repository<CouponInfo>);
    create(createDto: CreateCouponInfoDto): Promise<CouponInfo>;
    findOne(id: number): Promise<CouponInfo>;
    findByVendorCodeCouponCode(vendorCode: string, couponCode: string): Promise<CouponInfo[]>;
    findByVendorCode(vendorCode: string): Promise<CouponInfo[]>;
    private checkExistence;
}
