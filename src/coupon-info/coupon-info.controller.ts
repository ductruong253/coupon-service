import { Body, Controller, Get, NotFoundException, Param, Post, UseGuards } from '@nestjs/common';
import { CouponInfoService } from './coupon-info.service';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { CreateCouponInfoDto } from './dtos/create-coupon-info.dto';
import { AuthGuard } from 'src/guards/auth.guard';
import { CouponInfoDto } from './dtos/coupon-info.dto';

@Controller('api/coupon-info')
@Serialize(CouponInfoDto)
@UseGuards(AuthGuard)
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
    create(@Body() body: CreateCouponInfoDto) {
        return this.couponInfoService.create(body);
    }
}
