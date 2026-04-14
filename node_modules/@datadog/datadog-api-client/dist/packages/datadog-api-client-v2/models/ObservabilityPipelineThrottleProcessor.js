"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineThrottleProcessor = void 0;
/**
 * The `throttle` processor limits the number of events that pass through over a given time window.
 *
 * **Supported pipeline types:** logs
 */
class ObservabilityPipelineThrottleProcessor {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineThrottleProcessor.attributeTypeMap;
    }
}
exports.ObservabilityPipelineThrottleProcessor = ObservabilityPipelineThrottleProcessor;
/**
 * @ignore
 */
ObservabilityPipelineThrottleProcessor.attributeTypeMap = {
    displayName: {
        baseName: "display_name",
        type: "string",
    },
    enabled: {
        baseName: "enabled",
        type: "boolean",
        required: true,
    },
    groupBy: {
        baseName: "group_by",
        type: "Array<string>",
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    include: {
        baseName: "include",
        type: "string",
        required: true,
    },
    threshold: {
        baseName: "threshold",
        type: "number",
        required: true,
        format: "int64",
    },
    type: {
        baseName: "type",
        type: "ObservabilityPipelineThrottleProcessorType",
        required: true,
    },
    window: {
        baseName: "window",
        type: "number",
        required: true,
        format: "double",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineThrottleProcessor.js.map