"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricEstimateAttributes = void 0;
/**
 * Object containing the definition of a metric estimate attribute.
 */
class MetricEstimateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricEstimateAttributes.attributeTypeMap;
    }
}
exports.MetricEstimateAttributes = MetricEstimateAttributes;
/**
 * @ignore
 */
MetricEstimateAttributes.attributeTypeMap = {
    estimateType: {
        baseName: "estimate_type",
        type: "MetricEstimateType",
    },
    estimatedAt: {
        baseName: "estimated_at",
        type: "Date",
        format: "date-time",
    },
    estimatedOutputSeries: {
        baseName: "estimated_output_series",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MetricEstimateAttributes.js.map