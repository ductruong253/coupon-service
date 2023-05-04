import { Module } from '@nestjs/common';
import { CouponInfoController } from './coupon-info.controller';
import { CouponInfoService } from './coupon-info.service';
import { Model } from 'mongoose';

@Module({
    imports: [],
    controllers: [CouponInfoController],
    providers: [CouponInfoService, Model]
})
export class CouponInfoModule {}
