"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineFilterProcessor = void 0;
/**
 * The `filter` processor allows conditional processing of logs/metrics based on a Datadog search query. Logs/metrics that match the `include` query are passed through; others are discarded.
 *
 * **Supported pipeline types:** logs, metrics
 */
class ObservabilityPipelineFilterProcessor {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineFilterProcessor.attributeTypeMap;
    }
}
exports.ObservabilityPipelineFilterProcessor = ObservabilityPipelineFilterProcessor;
/**
 * @ignore
 */
ObservabilityPipelineFilterProcessor.attributeTypeMap = {
    displayName: {
        baseName: "display_name",
        type: "string",
    },
    enabled: {
        baseName: "enabled",
        type: "boolean",
        required: true,
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
    type: {
        baseName: "type",
        type: "ObservabilityPipelineFilterProcessorType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineFilterProcessor.js.map