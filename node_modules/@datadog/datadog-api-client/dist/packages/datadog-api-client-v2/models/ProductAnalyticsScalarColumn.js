"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductAnalyticsScalarColumn = void 0;
/**
 * A column in a scalar response.
 */
class ProductAnalyticsScalarColumn {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ProductAnalyticsScalarColumn.attributeTypeMap;
    }
}
exports.ProductAnalyticsScalarColumn = ProductAnalyticsScalarColumn;
/**
 * @ignore
 */
ProductAnalyticsScalarColumn.attributeTypeMap = {
    meta: {
        baseName: "meta",
        type: "ProductAnalyticsScalarColumnMeta",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "ProductAnalyticsScalarColumnType",
    },
    values: {
        baseName: "values",
        type: "Array<any>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ProductAnalyticsScalarColumn.js.map