"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventPayload = void 0;
/**
 * Event attributes.
 */
class EventPayload {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EventPayload.attributeTypeMap;
    }
}
exports.EventPayload = EventPayload;
/**
 * @ignore
 */
EventPayload.attributeTypeMap = {
    aggregationKey: {
        baseName: "aggregation_key",
        type: "string",
    },
    attributes: {
        baseName: "attributes",
        type: "EventPayloadAttributes",
        required: true,
    },
    category: {
        baseName: "category",
        type: "EventCategory",
        required: true,
    },
    host: {
        baseName: "host",
        type: "string",
    },
    integrationId: {
        baseName: "integration_id",
        type: "EventPayloadIntegrationId",
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
        type: "string",
    },
    title: {
        baseName: "title",
        type: "string",
        required: true,
    },
};
//# sourceMappingURL=EventPayload.js.map