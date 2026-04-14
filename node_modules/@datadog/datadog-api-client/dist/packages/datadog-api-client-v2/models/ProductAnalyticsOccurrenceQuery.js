"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductAnalyticsOccurrenceQuery = void 0;
/**
 * A Product Analytics occurrence-filtered query.
 */
class ProductAnalyticsOccurrenceQuery {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ProductAnalyticsOccurrenceQuery.attributeTypeMap;
    }
}
exports.ProductAnalyticsOccurrenceQuery = ProductAnalyticsOccurrenceQuery;
/**
 * @ignore
 */
ProductAnalyticsOccurrenceQuery.attributeTypeMap = {
    dataSource: {
        baseName: "data_source",
        type: "ProductAnalyticsOccurrenceQueryDataSource",
        required: true,
    },
    search: {
        baseName: "search",
        type: "ProductAnalyticsOccurrenceSearch",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ProductAnalyticsOccurrenceQuery.js.map