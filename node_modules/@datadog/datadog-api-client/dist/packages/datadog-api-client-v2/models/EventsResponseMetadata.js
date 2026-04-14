"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsResponseMetadata = void 0;
/**
 * The metadata associated with a request.
 */
class EventsResponseMetadata {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EventsResponseMetadata.attributeTypeMap;
    }
}
exports.EventsResponseMetadata = EventsResponseMetadata;
/**
 * @ignore
 */
EventsResponseMetadata.attributeTypeMap = {
    elapsed: {
        baseName: "elapsed",
        type: "number",
        format: "int64",
    },
    page: {
        baseName: "page",
        type: "EventsResponseMetadataPage",
    },
    requestId: {
        baseName: "request_id",
        type: "string",
    },
    status: {
        baseName: "status",
        type: "string",
    },
    warnings: {
        baseName: "warnings",
        type: "Array<EventsWarning>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EventsResponseMetadata.js.map