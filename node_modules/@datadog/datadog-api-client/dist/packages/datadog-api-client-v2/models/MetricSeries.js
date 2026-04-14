"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricSeries = void 0;
/**
 * A metric to submit to Datadog.
 * See [Datadog metrics](https://docs.datadoghq.com/developers/metrics/#custom-metrics-properties).
 */
class MetricSeries {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricSeries.attributeTypeMap;
    }
}
exports.MetricSeries = MetricSeries;
/**
 * @ignore
 */
MetricSeries.attributeTypeMap = {
    interval: {
        baseName: "interval",
        type: "number",
        format: "int64",
    },
    metadata: {
        baseName: "metadata",
        type: "MetricMetadata",
    },
    metric: {
        baseName: "metric",
        type: "string",
        required: true,
    },
    points: {
        baseName: "points",
        type: "Array<MetricPoint>",
        required: true,
    },
    resources: {
        baseName: "resources",
        type: "Array<MetricResource>",
    },
    sourceTypeName: {
        baseName: "source_type_name",
        type: "string",
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    type: {
        baseName: "type",
        type: "MetricIntakeType",
    },
    unit: {
        baseName: "unit",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MetricSeries.js.map