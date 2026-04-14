"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricSuggestedTagsAndAggregations = void 0;
/**
 * Object for a single metric's actively queried tags and aggregations.
 */
class MetricSuggestedTagsAndAggregations {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricSuggestedTagsAndAggregations.attributeTypeMap;
    }
}
exports.MetricSuggestedTagsAndAggregations = MetricSuggestedTagsAndAggregations;
/**
 * @ignore
 */
MetricSuggestedTagsAndAggregations.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "MetricSuggestedTagsAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "MetricActiveConfigurationType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MetricSuggestedTagsAndAggregations.js.map