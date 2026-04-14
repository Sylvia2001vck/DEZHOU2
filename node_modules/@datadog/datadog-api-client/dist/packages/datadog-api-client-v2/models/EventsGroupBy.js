"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsGroupBy = void 0;
/**
 * A dimension on which to split a query's results.
 */
class EventsGroupBy {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EventsGroupBy.attributeTypeMap;
    }
}
exports.EventsGroupBy = EventsGroupBy;
/**
 * @ignore
 */
EventsGroupBy.attributeTypeMap = {
    facet: {
        baseName: "facet",
        type: "string",
        required: true,
    },
    limit: {
        baseName: "limit",
        type: "number",
        format: "int32",
    },
    sort: {
        baseName: "sort",
        type: "EventsGroupBySort",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EventsGroupBy.js.map