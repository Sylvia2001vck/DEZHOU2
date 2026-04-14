"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageAttributesObject = void 0;
/**
 * Usage attributes data.
 */
class UsageAttributesObject {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageAttributesObject.attributeTypeMap;
    }
}
exports.UsageAttributesObject = UsageAttributesObject;
/**
 * @ignore
 */
UsageAttributesObject.attributeTypeMap = {
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
    timeseries: {
        baseName: "timeseries",
        type: "Array<UsageTimeSeriesObject>",
    },
    usageType: {
        baseName: "usage_type",
        type: "HourlyUsageType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageAttributesObject.js.map