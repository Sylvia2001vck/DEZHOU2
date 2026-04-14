"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductAnalyticsScalarResponseAttributes = void 0;
class ProductAnalyticsScalarResponseAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ProductAnalyticsScalarResponseAttributes.attributeTypeMap;
    }
}
exports.ProductAnalyticsScalarResponseAttributes = ProductAnalyticsScalarResponseAttributes;
/**
 * @ignore
 */
ProductAnalyticsScalarResponseAttributes.attributeTypeMap = {
    columns: {
        baseName: "columns",
        type: "Array<ProductAnalyticsScalarColumn>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ProductAnalyticsScalarResponseAttributes.js.map