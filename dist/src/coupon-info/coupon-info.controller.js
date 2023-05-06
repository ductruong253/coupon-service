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
let CouponInfoController = class CouponInfoController {
    constructor(couponInfoService) {
        this.couponInfoService = couponInfoService;
    }
    async findCouponInfo(id) {
        const couponInfo = await this.couponInfoService.findOne(parseInt(id));
        if (!couponInfo) {
            throw new common_1.NotFoundException('Coupon info not found');
        }
        return couponInfo;
    }
    create(body) {
        return this.couponInfoService.create(body);
    }
};
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CouponInfoController.prototype, "findCouponInfo", null);
__decorate([
    (0, common_1.Post)(),
    (0, serialize_interceptor_1.Serialize)(create_coupon_info_dto_1.CreateCouponInfoDto),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_coupon_info_dto_1.CreateCouponInfoDto]),
    __metadata("design:returntype", void 0)
], CouponInfoController.prototype, "create", null);
CouponInfoController = __decorate([
    (0, common_1.Controller)('api/coupon-info'),
    __metadata("design:paramtypes", [coupon_info_service_1.CouponInfoService])
], CouponInfoController);
exports.CouponInfoController = CouponInfoController;
//# sourceMappingURL=coupon-info.controller.js.map