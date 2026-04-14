"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductAnalyticsScalarResponse = void 0;
/**
 * Response for a scalar analytics query.
 */
class ProductAnalyticsScalarResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ProductAnalyticsScalarResponse.attributeTypeMap;
    }
}
exports.ProductAnalyticsScalarResponse = ProductAnalyticsScalarResponse;
/**
 * @ignore
 */
ProductAnalyticsScalarResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "ProductAnalyticsScalarResponseData",
    },
    meta: {
        baseName: "meta",
        type: "ProductAnalyticsResponseMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ProductAnalyticsScalarResponse.js.map