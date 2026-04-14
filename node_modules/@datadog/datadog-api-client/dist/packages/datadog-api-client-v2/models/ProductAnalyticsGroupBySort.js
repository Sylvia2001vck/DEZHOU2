"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductAnalyticsGroupBySort = void 0;
/**
 * Sort configuration for group-by results.
 */
class ProductAnalyticsGroupBySort {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ProductAnalyticsGroupBySort.attributeTypeMap;
    }
}
exports.ProductAnalyticsGroupBySort = ProductAnalyticsGroupBySort;
/**
 * @ignore
 */
ProductAnalyticsGroupBySort.attributeTypeMap = {
    aggregation: {
        baseName: "aggregation",
        type: "string",
    },
    metric: {
        baseName: "metric",
        type: "string",
    },
    order: {
        baseName: "order",
        type: "QuerySortOrder",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ProductAnalyticsGroupBySort.js.map