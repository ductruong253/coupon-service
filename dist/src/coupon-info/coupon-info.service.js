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
exports.CouponInfoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const coupon_info_entity_1 = require("./coupon-info.entity");
const approval_status_enum_1 = require("./enums/approval-status.enum");
const coupon_status_enum_1 = require("./enums/coupon-status.enum");
let CouponInfoService = class CouponInfoService {
    constructor(repo) {
        this.repo = repo;
    }
    async create(createDto) {
        if (await this.checkExistence(createDto.vendorCode, createDto.couponCode)) {
            throw new common_1.BadRequestException('couponCode existed');
        }
        const couponInfo = this.repo.create(createDto);
        couponInfo.approvalStatus = approval_status_enum_1.ApprovalStatusEnum.PENDING;
        couponInfo.createdDate = new Date();
        couponInfo.isActive = false;
        couponInfo.currentVoucherCount = 0;
        couponInfo.status = coupon_status_enum_1.CouponStatusEnum.CREATED;
        this.repo.save(couponInfo);
        return couponInfo;
    }
    findOne(id) {
        if (!id)
            return null;
        return this.repo.findOneBy({ id });
    }
    async findByVendorCodeCouponCode(vendorCode, couponCode) {
        const coupon = await this.repo.findBy({ vendorCode, couponCode });
        return coupon;
    }
    async findByVendorCode(vendorCode) {
        const coupon = await this.repo.findBy({ vendorCode });
        return coupon;
    }
    async checkExistence(vendorCode, couponCode) {
        const coupon = await this.findByVendorCodeCouponCode(vendorCode, couponCode);
        if (coupon)
            return true;
        return false;
    }
};
CouponInfoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(coupon_info_entity_1.CouponInfo)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], CouponInfoService);
exports.CouponInfoService = CouponInfoService;
//# sourceMappingURL=coupon-info.service.js.map