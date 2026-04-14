"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricSuggestedTagsAttributes = void 0;
/**
 * Object containing the definition of a metric's actively queried tags and aggregations.
 */
class MetricSuggestedTagsAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricSuggestedTagsAttributes.attributeTypeMap;
    }
}
exports.MetricSuggestedTagsAttributes = MetricSuggestedTagsAttributes;
/**
 * @ignore
 */
MetricSuggestedTagsAttributes.attributeTypeMap = {
    activeAggregations: {
        baseName: "active_aggregations",
        type: "Array<MetricCustomAggregation>",
    },
    activeTags: {
        baseName: "active_tags",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MetricSuggestedTagsAttributes.js.map