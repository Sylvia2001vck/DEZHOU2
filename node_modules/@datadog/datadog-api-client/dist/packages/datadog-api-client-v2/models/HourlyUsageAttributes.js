"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HourlyUsageAttributes = void 0;
/**
 * Attributes of hourly usage for a product family for an org for a time period.
 */
class HourlyUsageAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return HourlyUsageAttributes.attributeTypeMap;
    }
}
exports.HourlyUsageAttributes = HourlyUsageAttributes;
/**
 * @ignore
 */
HourlyUsageAttributes.attributeTypeMap = {
    accountName: {
        baseName: "account_name",
        type: "string",
    },
    accountPublicId: {
        baseName: "account_public_id",
        type: "string",
    },
    measurements: {
        baseName: "measurements",
        type: "Array<HourlyUsageMeasurement>",
    },
    orgName: {
        baseName: "org_name",
        type: "string",
    },
    productFamily: {
        baseName: "product_family",
        type: "string",
    },
    publicId: {
        baseName: "public_id",
        type: "string",
    },
    region: {
        baseName: "region",
        type: "string",
    },
    timestamp: {
        baseName: "timestamp",
        type: "Date",
        format: "date-time",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=HourlyUsageAttributes.js.map