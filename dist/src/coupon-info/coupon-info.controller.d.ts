import { CouponInfoService } from './coupon-info.service';
import { CreateCouponInfoDto } from './dtos/create-coupon-info.dto';
import { UpdateCouponInfoDto } from './dtos/update-coupon-info.dto';
export declare class CouponInfoController {
    private couponInfoService;
    constructor(couponInfoService: CouponInfoService);
    findCouponInfoByCode(couponCode: string, vendorCode: string): Promise<import("./coupon-info.entity").CouponInfo>;
    findCouponVendorCode(vendorCode: string): Promise<import("./coupon-info.entity").CouponInfo[]>;
    create(body: CreateCouponInfoDto): Promise<import("./coupon-info.entity").CouponInfo>;
    update(body: UpdateCouponInfoDto): Promise<import("./coupon-info.entity").CouponInfo>;
    approveCoupon(couponCode: string, vendorCode: string): Promise<import("./coupon-info.entity").CouponInfo>;
}
