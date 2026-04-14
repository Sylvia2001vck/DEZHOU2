"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpansAggregateSort = void 0;
/**
 * A sort rule.
 */
class SpansAggregateSort {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SpansAggregateSort.attributeTypeMap;
    }
}
exports.SpansAggregateSort = SpansAggregateSort;
/**
 * @ignore
 */
SpansAggregateSort.attributeTypeMap = {
    aggregation: {
        baseName: "aggregation",
        type: "SpansAggregationFunction",
    },
    metric: {
        baseName: "metric",
        type: "string",
    },
    order: {
        baseName: "order",
        type: "SpansSortOrder",
    },
    type: {
        baseName: "type",
        type: "SpansAggregateSortType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SpansAggregateSort.js.map