import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ICouponInfo } from './coupon-info.interface';
import { Model } from 'mongoose';

@Injectable()
export class CouponInfoService {
    constructor(@InjectModel('CouponInfo') private couponInfoModel: Model<ICouponInfo>) {}

    async getAllCouponInfo(): Promise<ICouponInfo[]> {
        return this.couponInfoModel.find()
    }
}
