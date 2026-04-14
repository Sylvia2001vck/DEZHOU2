"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricTagConfigurationCreateAttributes = void 0;
/**
 * Object containing the definition of a metric tag configuration to be created.
 */
class MetricTagConfigurationCreateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricTagConfigurationCreateAttributes.attributeTypeMap;
    }
}
exports.MetricTagConfigurationCreateAttributes = MetricTagConfigurationCreateAttributes;
/**
 * @ignore
 */
MetricTagConfigurationCreateAttributes.attributeTypeMap = {
    aggregations: {
        baseName: "aggregations",
        type: "Array<MetricCustomAggregation>",
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
        required: true,
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MetricTagConfigurationCreateAttributes.js.map