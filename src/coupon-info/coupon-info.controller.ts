import { Controller, Get, Res } from '@nestjs/common';
import { CouponInfoService } from './coupon-info.service';

@Controller('api/coupon-info')
export class CouponInfoController {
    constructor(private readonly couponInfoService: CouponInfoService) {}

    @Get()
    async getAllCouponInfo(@Res() response) {

    }
}
