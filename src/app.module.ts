import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CouponInfoModule } from './coupon-info/coupon-info.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CouponInfoSchema } from './coupon-info/coupon-info.schema';

@Module({
  imports: [
    CouponInfoModule, 
    MongooseModule.forRoot('mongodb://localhost:27017/coupon-service'),
    MongooseModule.forFeature([
      {
        name: 'CouponInfo',
        schema: CouponInfoSchema
      }
    ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
