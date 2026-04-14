"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventCreateResponseAttributesAttributes = void 0;
/**
 * JSON object for category-specific attributes.
 */
class EventCreateResponseAttributesAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EventCreateResponseAttributesAttributes.attributeTypeMap;
    }
}
exports.EventCreateResponseAttributesAttributes = EventCreateResponseAttributesAttributes;
/**
 * @ignore
 */
EventCreateResponseAttributesAttributes.attributeTypeMap = {
    evt: {
        baseName: "evt",
        type: "EventCreateResponseAttributesAttributesEvt",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EventCreateResponseAttributesAttributes.js.map