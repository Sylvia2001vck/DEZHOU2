"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventResponseAttributes = void 0;
/**
 * The object description of an event response attribute.
 */
class EventResponseAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EventResponseAttributes.attributeTypeMap;
    }
}
exports.EventResponseAttributes = EventResponseAttributes;
/**
 * @ignore
 */
EventResponseAttributes.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "EventAttributes",
    },
    message: {
        baseName: "message",
        type: "string",
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    timestamp: {
        baseName: "timestamp",
        type: "Date",
        format: "date-time",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EventResponseAttributes.js.map