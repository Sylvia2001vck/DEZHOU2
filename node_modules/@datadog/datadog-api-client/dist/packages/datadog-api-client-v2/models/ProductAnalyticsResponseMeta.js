"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductAnalyticsResponseMeta = void 0;
/**
 * Metadata for a Product Analytics query response.
 */
class ProductAnalyticsResponseMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ProductAnalyticsResponseMeta.attributeTypeMap;
    }
}
exports.ProductAnalyticsResponseMeta = ProductAnalyticsResponseMeta;
/**
 * @ignore
 */
ProductAnalyticsResponseMeta.attributeTypeMap = {
    requestId: {
        baseName: "request_id",
        type: "string",
    },
    status: {
        baseName: "status",
        type: "ProductAnalyticsResponseMetaStatus",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ProductAnalyticsResponseMeta.js.map