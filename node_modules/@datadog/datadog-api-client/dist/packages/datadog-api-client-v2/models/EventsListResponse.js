"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsListResponse = void 0;
/**
 * The response object with all events matching the request and pagination information.
 */
class EventsListResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EventsListResponse.attributeTypeMap;
    }
}
exports.EventsListResponse = EventsListResponse;
/**
 * @ignore
 */
EventsListResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<EventResponse>",
    },
    links: {
        baseName: "links",
        type: "EventsListResponseLinks",
    },
    meta: {
        baseName: "meta",
        type: "EventsResponseMetadata",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EventsListResponse.js.map