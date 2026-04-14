"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductAnalyticsAnalyticsRequest = void 0;
/**
 * Request for computing analytics results (scalar or timeseries).
 */
class ProductAnalyticsAnalyticsRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ProductAnalyticsAnalyticsRequest.attributeTypeMap;
    }
}
exports.ProductAnalyticsAnalyticsRequest = ProductAnalyticsAnalyticsRequest;
/**
 * @ignore
 */
ProductAnalyticsAnalyticsRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "ProductAnalyticsAnalyticsRequestData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ProductAnalyticsAnalyticsRequest.js.map