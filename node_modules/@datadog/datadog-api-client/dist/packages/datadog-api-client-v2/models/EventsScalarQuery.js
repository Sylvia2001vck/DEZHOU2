"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsScalarQuery = void 0;
/**
 * An individual scalar events query.
 */
class EventsScalarQuery {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EventsScalarQuery.attributeTypeMap;
    }
}
exports.EventsScalarQuery = EventsScalarQuery;
/**
 * @ignore
 */
EventsScalarQuery.attributeTypeMap = {
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
//# sourceMappingURL=EventsScalarQuery.js.map