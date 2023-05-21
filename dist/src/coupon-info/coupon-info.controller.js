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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponInfoController = void 0;
const common_1 = require("@nestjs/common");
const coupon_info_service_1 = require("./coupon-info.service");
const serialize_interceptor_1 = require("../interceptors/serialize.interceptor");
const create_coupon_info_dto_1 = require("./dtos/create-coupon-info.dto");
const auth_guard_1 = require("../guards/auth.guard");
const coupon_info_dto_1 = require("./dtos/coupon-info.dto");
let CouponInfoController = class CouponInfoController {
    constructor(couponInfoService) {
        this.couponInfoService = couponInfoService;
    }
    async findCouponInfoByCode(couponCode, vendorCode) {
        const couponInfo = await this.couponInfoService.findOneByVendorCodeCouponCode(vendorCode, couponCode);
        if (!couponInfo) {
            throw new common_1.NotFoundException('Coupon not found');
        }
        return couponInfo;
    }
    async findCouponVendorCode(vendorCode) {
        const couponInfo = await this.couponInfoService.findByVendorCode(vendorCode);
        if (!couponInfo) {
            throw new common_1.NotFoundException('Coupon not found');
        }
        return couponInfo;
    }
    create(body) {
        return this.couponInfoService.create(body);
    }
};
__decorate([
    (0, common_1.Get)('vendorCode/:vendorCode/couponCode/:couponCode'),
    __param(0, (0, common_1.Param)('couponCode')),
    __param(1, (0, common_1.Param)('vendorCode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], CouponInfoController.prototype, "findCouponInfoByCode", null);
__decorate([
    (0, common_1.Get)('vendorCode/:vendorCode'),
    __param(0, (0, common_1.Param)('vendorCode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CouponInfoController.prototype, "findCouponVendorCode", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_coupon_info_dto_1.CreateCouponInfoDto]),
    __metadata("design:returntype", void 0)
], CouponInfoController.prototype, "create", null);
CouponInfoController = __decorate([
    (0, common_1.Controller)('api/coupon/'),
    (0, serialize_interceptor_1.Serialize)(coupon_info_dto_1.CouponInfoDto),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __metadata("design:paramtypes", [coupon_info_service_1.CouponInfoService])
], CouponInfoController);
exports.CouponInfoController = CouponInfoController;
//# sourceMappingURL=coupon-info.controller.js.map