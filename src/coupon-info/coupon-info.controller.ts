import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { CouponInfoService } from './coupon-info.service';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { CreateCouponInfoDto } from './dtos/create-coupon-info.dto';

@Controller('api/coupon-info')
export class CouponInfoController {
    constructor(private couponInfoService: CouponInfoService) {

    }

    @Get('/:id')
    async findCouponInfo(@Param('id') id: string) {
        const couponInfo = await this.couponInfoService.findOne(parseInt(id))
        if (!couponInfo){
            throw new NotFoundException('Coupon info not found')
        }
        return couponInfo
    }

    @Post()
    @Serialize(CreateCouponInfoDto)
    create(@Body() body: CreateCouponInfoDto) {
        return this.couponInfoService.create(body);
    }
}
