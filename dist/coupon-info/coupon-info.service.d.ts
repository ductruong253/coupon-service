import { ICouponInfo } from './coupon-info.interface';
import { Model } from 'mongoose';
export declare class CouponInfoService {
    private couponInfoModel;
    constructor(couponInfoModel: Model<ICouponInfo>);
    getAllCouponInfo(): Promise<ICouponInfo[]>;
}
