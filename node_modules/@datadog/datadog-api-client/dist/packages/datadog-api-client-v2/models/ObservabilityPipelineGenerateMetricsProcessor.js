"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineGenerateMetricsProcessor = void 0;
/**
 * The `generate_datadog_metrics` processor creates custom metrics from logs and sends them to Datadog.
 * Metrics can be counters, gauges, or distributions and optionally grouped by log fields.
 *
 * **Supported pipeline types:** logs
 */
class ObservabilityPipelineGenerateMetricsProcessor {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineGenerateMetricsProcessor.attributeTypeMap;
    }
}
exports.ObservabilityPipelineGenerateMetricsProcessor = ObservabilityPipelineGenerateMetricsProcessor;
/**
 * @ignore
 */
ObservabilityPipelineGenerateMetricsProcessor.attributeTypeMap = {
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
    },
    metrics: {
        baseName: "metrics",
        type: "Array<ObservabilityPipelineGeneratedMetric>",
    },
    type: {
        baseName: "type",
        type: "ObservabilityPipelineGenerateMetricsProcessorType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineGenerateMetricsProcessor.js.map