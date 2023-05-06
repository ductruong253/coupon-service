import { Body, Controller, Get, NotFoundException, Param, Post, UseGuards } from '@nestjs/common';
import { CouponInfoService } from './coupon-info.service';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { CreateCouponInfoDto } from './dtos/create-coupon-info.dto';
import { AuthGuard } from 'src/guards/auth.guard';
import { CouponInfoDto } from './dtos/coupon-info.dto';

@Controller('api/coupon/')
@Serialize(CouponInfoDto)
@UseGuards(AuthGuard)
export class CouponInfoController {
    constructor(private couponInfoService: CouponInfoService) {

    }

    @Get('couponCode/:couponCode')
    async findCouponInfoByCode(@Param('couponCode') couponCode: string) {
        const couponInfo = await this.couponInfoService.findByCouponCode(couponCode)
        if (!couponInfo){
            throw new NotFoundException('Coupon not found')
        }
        return couponInfo
    }

    @Post()
    create(@Body() body: CreateCouponInfoDto) {
        return this.couponInfoService.create(body);
    }

    
}
