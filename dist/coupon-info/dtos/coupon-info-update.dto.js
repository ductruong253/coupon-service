"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCouponInfo = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const coupon_info_create_dto_1 = require("./coupon-info-create.dto");
class UpdateCouponInfo extends (0, mapped_types_1.PartialType)(coupon_info_create_dto_1.CreateCouponDto) {
}
exports.UpdateCouponInfo = UpdateCouponInfo;
//# sourceMappingURL=coupon-info-update.dto.js.map