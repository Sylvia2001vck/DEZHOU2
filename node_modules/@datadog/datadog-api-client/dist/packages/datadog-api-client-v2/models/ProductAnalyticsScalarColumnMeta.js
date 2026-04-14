"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductAnalyticsScalarColumnMeta = void 0;
class ProductAnalyticsScalarColumnMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ProductAnalyticsScalarColumnMeta.attributeTypeMap;
    }
}
exports.ProductAnalyticsScalarColumnMeta = ProductAnalyticsScalarColumnMeta;
/**
 * @ignore
 */
ProductAnalyticsScalarColumnMeta.attributeTypeMap = {
    unit: {
        baseName: "unit",
        type: "Array<ProductAnalyticsUnit>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ProductAnalyticsScalarColumnMeta.js.map