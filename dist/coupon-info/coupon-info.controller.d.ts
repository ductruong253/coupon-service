import { CouponInfoService } from './coupon-info.service';
export declare class CouponInfoController {
    private readonly couponInfoService;
    constructor(couponInfoService: CouponInfoService);
    getAllCouponInfo(response: any): Promise<void>;
}
