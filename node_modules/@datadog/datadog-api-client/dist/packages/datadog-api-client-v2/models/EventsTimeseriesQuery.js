"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsTimeseriesQuery = void 0;
/**
 * An individual timeseries events query.
 */
class EventsTimeseriesQuery {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EventsTimeseriesQuery.attributeTypeMap;
    }
}
exports.EventsTimeseriesQuery = EventsTimeseriesQuery;
/**
 * @ignore
 */
EventsTimeseriesQuery.attributeTypeMap = {
    compute: {
        baseName: "compute",
        type: "EventsCompute",
        required: true,
    },
    dataSource: {
        baseName: "data_source",
        type: "EventsDataSource",
        required: true,
    },
    groupBy: {
        baseName: "group_by",
        type: "Array<EventsGroupBy>",
    },
    indexes: {
        baseName: "indexes",
        type: "Array<string>",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    search: {
        baseName: "search",
        type: "EventsSearch",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EventsTimeseriesQuery.js.map