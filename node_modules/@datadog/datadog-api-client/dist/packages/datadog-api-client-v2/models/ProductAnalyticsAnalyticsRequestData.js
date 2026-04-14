"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductAnalyticsAnalyticsRequestData = void 0;
/**
 * Data object for an analytics request.
 */
class ProductAnalyticsAnalyticsRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ProductAnalyticsAnalyticsRequestData.attributeTypeMap;
    }
}
exports.ProductAnalyticsAnalyticsRequestData = ProductAnalyticsAnalyticsRequestData;
/**
 * @ignore
 */
ProductAnalyticsAnalyticsRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ProductAnalyticsAnalyticsRequestAttributes",
        required: true,
    },
    type: {
        baseName: "type",
        type: "ProductAnalyticsAnalyticsRequestType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ProductAnalyticsAnalyticsRequestData.js.map