"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductAnalyticsOccurrenceSearch = void 0;
/**
 * Search parameters for an occurrence query.
 */
class ProductAnalyticsOccurrenceSearch {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ProductAnalyticsOccurrenceSearch.attributeTypeMap;
    }
}
exports.ProductAnalyticsOccurrenceSearch = ProductAnalyticsOccurrenceSearch;
/**
 * @ignore
 */
ProductAnalyticsOccurrenceSearch.attributeTypeMap = {
    occurrences: {
        baseName: "occurrences",
        type: "ProductAnalyticsOccurrenceFilter",
    },
    query: {
        baseName: "query",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ProductAnalyticsOccurrenceSearch.js.map