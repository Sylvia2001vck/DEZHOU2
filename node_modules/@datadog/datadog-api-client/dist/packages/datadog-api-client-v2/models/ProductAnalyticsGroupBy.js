"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductAnalyticsGroupBy = void 0;
/**
 * A group-by rule for segmenting results by facet values.
 */
class ProductAnalyticsGroupBy {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ProductAnalyticsGroupBy.attributeTypeMap;
    }
}
exports.ProductAnalyticsGroupBy = ProductAnalyticsGroupBy;
/**
 * @ignore
 */
ProductAnalyticsGroupBy.attributeTypeMap = {
    facet: {
        baseName: "facet",
        type: "string",
        required: true,
    },
    limit: {
        baseName: "limit",
        type: "number",
        format: "int64",
    },
    shouldExcludeMissing: {
        baseName: "should_exclude_missing",
        type: "boolean",
    },
    sort: {
        baseName: "sort",
        type: "ProductAnalyticsGroupBySort",
    },
    source: {
        baseName: "source",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ProductAnalyticsGroupBy.js.map