"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCouponInfoDto = void 0;
const class_validator_1 = require("class-validator");
const coupon_type_enum_1 = require("../enums/coupon-type.enum");
const currency_enum_1 = require("../enums/currency.enum");
const class_transformer_1 = require("class-transformer");
const coupon_status_enum_1 = require("../enums/coupon-status.enum");
class UpdateCouponInfoDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateCouponInfoDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateCouponInfoDto.prototype, "vendorCode", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], UpdateCouponInfoDto.prototype, "startDate", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], UpdateCouponInfoDto.prototype, "endDate", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateCouponInfoDto.prototype, "couponCode", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateCouponInfoDto.prototype, "voucherLimit", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateCouponInfoDto.prototype, "conditions", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(coupon_type_enum_1.CouponTypeEnum),
    __metadata("design:type", String)
], UpdateCouponInfoDto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(coupon_status_enum_1.CouponStatusEnum),
    __metadata("design:type", String)
], UpdateCouponInfoDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateCouponInfoDto.prototype, "maxDiscountValue", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(currency_enum_1.CurrencyEnum),
    __metadata("design:type", String)
], UpdateCouponInfoDto.prototype, "unit", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(100),
    __metadata("design:type", Number)
], UpdateCouponInfoDto.prototype, "discountPercent", void 0);
exports.UpdateCouponInfoDto = UpdateCouponInfoDto;
//# sourceMappingURL=update-coupon-info.dto.js.map