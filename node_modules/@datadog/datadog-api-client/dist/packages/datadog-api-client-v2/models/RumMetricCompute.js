"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RumMetricCompute = void 0;
/**
 * The compute rule to compute the rum-based metric.
 */
class RumMetricCompute {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RumMetricCompute.attributeTypeMap;
    }
}
exports.RumMetricCompute = RumMetricCompute;
/**
 * @ignore
 */
RumMetricCompute.attributeTypeMap = {
    aggregationType: {
        baseName: "aggregation_type",
        type: "RumMetricComputeAggregationType",
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
//# sourceMappingURL=RumMetricCompute.js.map