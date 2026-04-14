"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventSystemAttributes = void 0;
/**
 * JSON object of event system attributes.
 */
class EventSystemAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EventSystemAttributes.attributeTypeMap;
    }
}
exports.EventSystemAttributes = EventSystemAttributes;
/**
 * @ignore
 */
EventSystemAttributes.attributeTypeMap = {
    category: {
        baseName: "category",
        type: "EventSystemAttributesCategory",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    integrationId: {
        baseName: "integration_id",
        type: "EventSystemAttributesIntegrationId",
    },
    sourceId: {
        baseName: "source_id",
        type: "number",
        format: "int64",
    },
    uid: {
        baseName: "uid",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EventSystemAttributes.js.map