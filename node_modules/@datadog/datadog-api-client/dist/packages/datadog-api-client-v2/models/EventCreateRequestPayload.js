"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventCreateRequestPayload = void 0;
/**
 * Payload for creating an event.
 */
class EventCreateRequestPayload {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EventCreateRequestPayload.attributeTypeMap;
    }
}
exports.EventCreateRequestPayload = EventCreateRequestPayload;
/**
 * @ignore
 */
EventCreateRequestPayload.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "EventCreateRequest",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EventCreateRequestPayload.js.map