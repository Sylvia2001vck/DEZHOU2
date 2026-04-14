"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMObsExperimentMetric = void 0;
/**
 * A metric associated with an LLM Observability experiment span.
 */
class LLMObsExperimentMetric {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LLMObsExperimentMetric.attributeTypeMap;
    }
}
exports.LLMObsExperimentMetric = LLMObsExperimentMetric;
/**
 * @ignore
 */
LLMObsExperimentMetric.attributeTypeMap = {
    assessment: {
        baseName: "assessment",
        type: "LLMObsMetricAssessment",
    },
    booleanValue: {
        baseName: "boolean_value",
        type: "boolean",
    },
    categoricalValue: {
        baseName: "categorical_value",
        type: "string",
    },
    error: {
        baseName: "error",
        type: "LLMObsExperimentMetricError",
    },
    jsonValue: {
        baseName: "json_value",
        type: "{ [key: string]: any; }",
    },
    label: {
        baseName: "label",
        type: "string",
        required: true,
    },
    metadata: {
        baseName: "metadata",
        type: "{ [key: string]: any; }",
    },
    metricType: {
        baseName: "metric_type",
        type: "LLMObsMetricScoreType",
        required: true,
    },
    reasoning: {
        baseName: "reasoning",
        type: "string",
    },
    scoreValue: {
        baseName: "score_value",
        type: "number",
        format: "double",
    },
    spanId: {
        baseName: "span_id",
        type: "string",
        required: true,
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    timestampMs: {
        baseName: "timestamp_ms",
        type: "number",
        required: true,
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LLMObsExperimentMetric.js.map