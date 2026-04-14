"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventAttributes = void 0;
/**
 * Object description of attributes from your event.
 */
class EventAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EventAttributes.attributeTypeMap;
    }
}
exports.EventAttributes = EventAttributes;
/**
 * @ignore
 */
EventAttributes.attributeTypeMap = {
    aggregationKey: {
        baseName: "aggregation_key",
        type: "string",
    },
    dateHappened: {
        baseName: "date_happened",
        type: "number",
        format: "int64",
    },
    deviceName: {
        baseName: "device_name",
        type: "string",
    },
    duration: {
        baseName: "duration",
        type: "number",
        format: "int64",
    },
    eventObject: {
        baseName: "event_object",
        type: "string",
    },
    evt: {
        baseName: "evt",
        type: "Event",
    },
    hostname: {
        baseName: "hostname",
        type: "string",
    },
    monitor: {
        baseName: "monitor",
        type: "MonitorType",
    },
    monitorGroups: {
        baseName: "monitor_groups",
        type: "Array<string>",
    },
    monitorId: {
        baseName: "monitor_id",
        type: "number",
        format: "int64",
    },
    priority: {
        baseName: "priority",
        type: "EventPriority",
    },
    relatedEventId: {
        baseName: "related_event_id",
        type: "number",
        format: "int64",
    },
    service: {
        baseName: "service",
        type: "string",
    },
    sourceTypeName: {
        baseName: "source_type_name",
        type: "string",
    },
    sourcecategory: {
        baseName: "sourcecategory",
        type: "string",
    },
    status: {
        baseName: "status",
        type: "EventStatusType",
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    timestamp: {
        baseName: "timestamp",
        type: "number",
        format: "int64",
    },
    title: {
        baseName: "title",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EventAttributes.js.map