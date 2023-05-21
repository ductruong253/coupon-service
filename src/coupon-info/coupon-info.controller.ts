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

    @Get('vendorCode/:vendorCode/couponCode/:couponCode')
    async findCouponInfoByCode(@Param('couponCode') couponCode: string, @Param('vendorCode') vendorCode: string) {
        const couponInfo = await this.couponInfoService.findByVendorCodeCouponCode(vendorCode, couponCode)
        if (!couponInfo){
            throw new NotFoundException('Coupon not found')
        }
        return couponInfo
    }

    @Get('vendorCode/:vendorCode')
    async findCouponVendorCode(@Param('vendorCode') vendorCode: string) {
        const couponInfo = await this.couponInfoService.findByVendorCode(vendorCode)
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
