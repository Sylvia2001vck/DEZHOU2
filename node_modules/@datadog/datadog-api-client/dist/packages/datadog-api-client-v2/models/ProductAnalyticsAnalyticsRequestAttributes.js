"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductAnalyticsAnalyticsRequestAttributes = void 0;
/**
 * Attributes for an analytics request.
 */
class ProductAnalyticsAnalyticsRequestAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ProductAnalyticsAnalyticsRequestAttributes.attributeTypeMap;
    }
}
exports.ProductAnalyticsAnalyticsRequestAttributes = ProductAnalyticsAnalyticsRequestAttributes;
/**
 * @ignore
 */
ProductAnalyticsAnalyticsRequestAttributes.attributeTypeMap = {
    enforcedExecutionType: {
        baseName: "enforced_execution_type",
        type: "ProductAnalyticsExecutionType",
    },
    from: {
        baseName: "from",
        type: "number",
        required: true,
        format: "int64",
    },
    query: {
        baseName: "query",
        type: "ProductAnalyticsAnalyticsQuery",
        required: true,
    },
    requestId: {
        baseName: "request_id",
        type: "string",
    },
    to: {
        baseName: "to",
        type: "number",
        required: true,
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ProductAnalyticsAnalyticsRequestAttributes.js.map