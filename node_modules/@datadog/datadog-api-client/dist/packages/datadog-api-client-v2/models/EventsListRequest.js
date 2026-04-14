"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsListRequest = void 0;
/**
 * The object sent with the request to retrieve a list of events from your organization.
 */
class EventsListRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EventsListRequest.attributeTypeMap;
    }
}
exports.EventsListRequest = EventsListRequest;
/**
 * @ignore
 */
EventsListRequest.attributeTypeMap = {
    filter: {
        baseName: "filter",
        type: "EventsQueryFilter",
    },
    options: {
        baseName: "options",
        type: "EventsQueryOptions",
    },
    page: {
        baseName: "page",
        type: "EventsRequestPage",
    },
    sort: {
        baseName: "sort",
        type: "EventsSort",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EventsListRequest.js.map