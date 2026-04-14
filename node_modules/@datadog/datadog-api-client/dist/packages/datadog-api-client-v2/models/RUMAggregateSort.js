"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RUMAggregateSort = void 0;
/**
 * A sort rule.
 */
class RUMAggregateSort {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RUMAggregateSort.attributeTypeMap;
    }
}
exports.RUMAggregateSort = RUMAggregateSort;
/**
 * @ignore
 */
RUMAggregateSort.attributeTypeMap = {
    aggregation: {
        baseName: "aggregation",
        type: "RUMAggregationFunction",
    },
    metric: {
        baseName: "metric",
        type: "string",
    },
    order: {
        baseName: "order",
        type: "RUMSortOrder",
    },
    type: {
        baseName: "type",
        type: "RUMAggregateSortType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RUMAggregateSort.js.map