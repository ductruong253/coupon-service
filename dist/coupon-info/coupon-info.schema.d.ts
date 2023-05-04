/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
export declare class CouponInfo {
    id: string;
    description: string;
    vendorCode: string;
    startDate: Date;
    endDate: Date;
    durationHr: number;
    createdDate: Date;
    createdBy: string;
    couponCode: string;
    approvalStatus: boolean;
    status: string;
    currentCount: number;
    couponLimit: number;
    conditions: string;
    type: string;
    maxDiscountValue: number;
    unit: string;
    discountPercent: number;
}
export declare const CouponInfoSchema: import("mongoose").Schema<CouponInfo, import("mongoose").Model<CouponInfo, any, any, any, import("mongoose").Document<unknown, any, CouponInfo> & Omit<CouponInfo & {
    _id: import("mongoose").Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, CouponInfo, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<CouponInfo>> & Omit<import("mongoose").FlatRecord<CouponInfo> & {
    _id: import("mongoose").Types.ObjectId;
}, never>>;
