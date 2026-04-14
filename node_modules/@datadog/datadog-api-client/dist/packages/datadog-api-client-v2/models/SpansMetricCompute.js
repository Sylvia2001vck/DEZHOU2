"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpansMetricCompute = void 0;
/**
 * The compute rule to compute the span-based metric.
 */
class SpansMetricCompute {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SpansMetricCompute.attributeTypeMap;
    }
}
exports.SpansMetricCompute = SpansMetricCompute;
/**
 * @ignore
 */
SpansMetricCompute.attributeTypeMap = {
    aggregationType: {
        baseName: "aggregation_type",
        type: "SpansMetricComputeAggregationType",
        required: true,
    },
    includePercentiles: {
        baseName: "include_percentiles",
        type: "boolean",
    },
    path: {
        baseName: "path",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SpansMetricCompute.js.map