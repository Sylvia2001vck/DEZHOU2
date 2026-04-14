"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsGroupBySort = void 0;
/**
 * The dimension by which to sort a query's results.
 */
class EventsGroupBySort {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EventsGroupBySort.attributeTypeMap;
    }
}
exports.EventsGroupBySort = EventsGroupBySort;
/**
 * @ignore
 */
EventsGroupBySort.attributeTypeMap = {
    aggregation: {
        baseName: "aggregation",
        type: "EventsAggregation",
        required: true,
    },
    metric: {
        baseName: "metric",
        type: "string",
    },
    order: {
        baseName: "order",
        type: "QuerySortOrder",
    },
    type: {
        baseName: "type",
        type: "EventsSortType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EventsGroupBySort.js.map