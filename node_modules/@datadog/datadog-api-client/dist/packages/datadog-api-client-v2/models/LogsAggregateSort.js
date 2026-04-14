"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsAggregateSort = void 0;
/**
 * A sort rule
 */
class LogsAggregateSort {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsAggregateSort.attributeTypeMap;
    }
}
exports.LogsAggregateSort = LogsAggregateSort;
/**
 * @ignore
 */
LogsAggregateSort.attributeTypeMap = {
    aggregation: {
        baseName: "aggregation",
        type: "LogsAggregationFunction",
    },
    metric: {
        baseName: "metric",
        type: "string",
    },
    order: {
        baseName: "order",
        type: "LogsSortOrder",
    },
    type: {
        baseName: "type",
        type: "LogsAggregateSortType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsAggregateSort.js.map