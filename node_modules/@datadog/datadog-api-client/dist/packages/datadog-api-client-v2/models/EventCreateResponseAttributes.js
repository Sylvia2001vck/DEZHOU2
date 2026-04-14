"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventCreateResponseAttributes = void 0;
/**
 * Event attributes.
 */
class EventCreateResponseAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EventCreateResponseAttributes.attributeTypeMap;
    }
}
exports.EventCreateResponseAttributes = EventCreateResponseAttributes;
/**
 * @ignore
 */
EventCreateResponseAttributes.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "EventCreateResponseAttributesAttributes",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EventCreateResponseAttributes.js.map