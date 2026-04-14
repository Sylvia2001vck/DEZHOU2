"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductAnalyticsSerie = void 0;
/**
 * A series in a timeseries response.
 */
class ProductAnalyticsSerie {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ProductAnalyticsSerie.attributeTypeMap;
    }
}
exports.ProductAnalyticsSerie = ProductAnalyticsSerie;
/**
 * @ignore
 */
ProductAnalyticsSerie.attributeTypeMap = {
    groupTags: {
        baseName: "group_tags",
        type: "Array<string>",
    },
    queryIndex: {
        baseName: "query_index",
        type: "number",
        format: "int64",
    },
    unit: {
        baseName: "unit",
        type: "Array<ProductAnalyticsUnit>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ProductAnalyticsSerie.js.map