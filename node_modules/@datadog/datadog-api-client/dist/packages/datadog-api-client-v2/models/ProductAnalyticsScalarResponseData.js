"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductAnalyticsScalarResponseData = void 0;
/**
 * Data object for a scalar response.
 */
class ProductAnalyticsScalarResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ProductAnalyticsScalarResponseData.attributeTypeMap;
    }
}
exports.ProductAnalyticsScalarResponseData = ProductAnalyticsScalarResponseData;
/**
 * @ignore
 */
ProductAnalyticsScalarResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ProductAnalyticsScalarResponseAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "ProductAnalyticsScalarResponseType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ProductAnalyticsScalarResponseData.js.map