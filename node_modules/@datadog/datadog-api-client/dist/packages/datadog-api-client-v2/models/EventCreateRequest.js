"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventCreateRequest = void 0;
/**
 * An event object.
 */
class EventCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EventCreateRequest.attributeTypeMap;
    }
}
exports.EventCreateRequest = EventCreateRequest;
/**
 * @ignore
 */
EventCreateRequest.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "EventPayload",
        required: true,
    },
    type: {
        baseName: "type",
        type: "EventCreateRequestType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EventCreateRequest.js.map