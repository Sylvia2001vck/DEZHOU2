"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricTagConfigurationUpdateAttributes = void 0;
/**
 * Object containing the definition of a metric tag configuration to be updated.
 */
class MetricTagConfigurationUpdateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricTagConfigurationUpdateAttributes.attributeTypeMap;
    }
}
exports.MetricTagConfigurationUpdateAttributes = MetricTagConfigurationUpdateAttributes;
/**
 * @ignore
 */
MetricTagConfigurationUpdateAttributes.attributeTypeMap = {
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
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MetricTagConfigurationUpdateAttributes.js.map