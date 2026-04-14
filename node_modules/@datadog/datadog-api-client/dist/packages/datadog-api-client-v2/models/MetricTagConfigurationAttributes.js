"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricTagConfigurationAttributes = void 0;
/**
 * Object containing the definition of a metric tag configuration attributes.
 */
class MetricTagConfigurationAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricTagConfigurationAttributes.attributeTypeMap;
    }
}
exports.MetricTagConfigurationAttributes = MetricTagConfigurationAttributes;
/**
 * @ignore
 */
MetricTagConfigurationAttributes.attributeTypeMap = {
    aggregations: {
        baseName: "aggregations",
        type: "Array<MetricCustomAggregation>",
    },
    createdAt: {
        baseName: "created_at",
        type: "Date",
        format: "date-time",
    },
    excludeTagsMode: {
        baseName: "exclude_tags_mode",
        type: "boolean",
    },
    includePercentiles: {
        baseName: "include_percentiles",
        type: "boolean",
    },
    metricType: {
        baseName: "metric_type",
        type: "MetricTagConfigurationMetricTypes",
    },
    modifiedAt: {
        baseName: "modified_at",
        type: "Date",
        format: "date-time",
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MetricTagConfigurationAttributes.js.map