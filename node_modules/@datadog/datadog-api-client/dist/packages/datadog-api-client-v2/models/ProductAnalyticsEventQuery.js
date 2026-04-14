"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductAnalyticsEventQuery = void 0;
/**
 * A standard Product Analytics event query.
 */
class ProductAnalyticsEventQuery {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ProductAnalyticsEventQuery.attributeTypeMap;
    }
}
exports.ProductAnalyticsEventQuery = ProductAnalyticsEventQuery;
/**
 * @ignore
 */
ProductAnalyticsEventQuery.attributeTypeMap = {
    dataSource: {
        baseName: "data_source",
        type: "ProductAnalyticsEventQueryDataSource",
        required: true,
    },
    search: {
        baseName: "search",
        type: "ProductAnalyticsEventSearch",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ProductAnalyticsEventQuery.js.map