"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductAnalyticsAnalyticsQuery = void 0;
/**
 * The analytics query definition containing a base query, compute rule, and optional grouping.
 */
class ProductAnalyticsAnalyticsQuery {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ProductAnalyticsAnalyticsQuery.attributeTypeMap;
    }
}
exports.ProductAnalyticsAnalyticsQuery = ProductAnalyticsAnalyticsQuery;
/**
 * @ignore
 */
ProductAnalyticsAnalyticsQuery.attributeTypeMap = {
    audienceFilters: {
        baseName: "audience_filters",
        type: "ProductAnalyticsAudienceFilters",
    },
    compute: {
        baseName: "compute",
        type: "ProductAnalyticsCompute",
        required: true,
    },
    groupBy: {
        baseName: "group_by",
        type: "Array<ProductAnalyticsGroupBy>",
    },
    indexes: {
        baseName: "indexes",
        type: "Array<string>",
    },
    query: {
        baseName: "query",
        type: "ProductAnalyticsBaseQuery",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ProductAnalyticsAnalyticsQuery.js.map