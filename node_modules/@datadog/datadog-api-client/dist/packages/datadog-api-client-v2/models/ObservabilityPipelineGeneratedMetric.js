"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineGeneratedMetric = void 0;
/**
 * Defines a log-based custom metric, including its name, type, filter, value computation strategy,
 * and optional grouping fields.
 */
class ObservabilityPipelineGeneratedMetric {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineGeneratedMetric.attributeTypeMap;
    }
}
exports.ObservabilityPipelineGeneratedMetric = ObservabilityPipelineGeneratedMetric;
/**
 * @ignore
 */
ObservabilityPipelineGeneratedMetric.attributeTypeMap = {
    groupBy: {
        baseName: "group_by",
        type: "Array<string>",
    },
    include: {
        baseName: "include",
        type: "string",
        required: true,
    },
    metricType: {
        baseName: "metric_type",
        type: "ObservabilityPipelineGeneratedMetricMetricType",
        required: true,
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    value: {
        baseName: "value",
        type: "ObservabilityPipelineMetricValue",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineGeneratedMetric.js.map