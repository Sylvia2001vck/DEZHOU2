"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricSuggestedTagsAndAggregationsResponse = void 0;
/**
 * Response object that includes a single metric's actively queried tags and aggregations.
 */
class MetricSuggestedTagsAndAggregationsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricSuggestedTagsAndAggregationsResponse.attributeTypeMap;
    }
}
exports.MetricSuggestedTagsAndAggregationsResponse = MetricSuggestedTagsAndAggregationsResponse;
/**
 * @ignore
 */
MetricSuggestedTagsAndAggregationsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "MetricSuggestedTagsAndAggregations",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MetricSuggestedTagsAndAggregationsResponse.js.map