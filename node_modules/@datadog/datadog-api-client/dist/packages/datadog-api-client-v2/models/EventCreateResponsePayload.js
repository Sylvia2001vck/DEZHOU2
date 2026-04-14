"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventCreateResponsePayload = void 0;
/**
 * Event creation response.
 */
class EventCreateResponsePayload {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EventCreateResponsePayload.attributeTypeMap;
    }
}
exports.EventCreateResponsePayload = EventCreateResponsePayload;
/**
 * @ignore
 */
EventCreateResponsePayload.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "EventCreateResponse",
    },
    links: {
        baseName: "links",
        type: "EventCreateResponsePayloadLinks",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EventCreateResponsePayload.js.map