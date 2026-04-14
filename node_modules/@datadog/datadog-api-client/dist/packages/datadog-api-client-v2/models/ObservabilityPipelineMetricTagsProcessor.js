"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineMetricTagsProcessor = void 0;
/**
 * The `metric_tags` processor filters metrics based on their tags using Datadog tag key patterns.
 *
 * **Supported pipeline types:** metrics
 */
class ObservabilityPipelineMetricTagsProcessor {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineMetricTagsProcessor.attributeTypeMap;
    }
}
exports.ObservabilityPipelineMetricTagsProcessor = ObservabilityPipelineMetricTagsProcessor;
/**
 * @ignore
 */
ObservabilityPipelineMetricTagsProcessor.attributeTypeMap = {
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
    rules: {
        baseName: "rules",
        type: "Array<ObservabilityPipelineMetricTagsProcessorRule>",
        required: true,
    },
    type: {
        baseName: "type",
        type: "ObservabilityPipelineMetricTagsProcessorType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineMetricTagsProcessor.js.map