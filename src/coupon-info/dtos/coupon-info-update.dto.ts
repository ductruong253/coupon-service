import { PartialType } from "@nestjs/mapped-types";
import { CreateCouponDto } from "./coupon-info-create.dto";

export class UpdateCouponInfo extends PartialType(CreateCouponDto) {}