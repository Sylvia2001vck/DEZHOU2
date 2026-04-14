"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventResponse = void 0;
/**
 * The object description of an event after being processed and stored by Datadog.
 */
class EventResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EventResponse.attributeTypeMap;
    }
}
exports.EventResponse = EventResponse;
/**
 * @ignore
 */
EventResponse.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "EventResponseAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "EventType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EventResponse.js.map