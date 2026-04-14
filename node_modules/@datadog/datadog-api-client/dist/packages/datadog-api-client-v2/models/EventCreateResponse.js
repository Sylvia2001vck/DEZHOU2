"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventCreateResponse = void 0;
/**
 * Event object.
 */
class EventCreateResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EventCreateResponse.attributeTypeMap;
    }
}
exports.EventCreateResponse = EventCreateResponse;
/**
 * @ignore
 */
EventCreateResponse.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "EventCreateResponseAttributes",
    },
    type: {
        baseName: "type",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EventCreateResponse.js.map