"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RumMetricResponseCompute = void 0;
/**
 * The compute rule to compute the rum-based metric.
 */
class RumMetricResponseCompute {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RumMetricResponseCompute.attributeTypeMap;
    }
}
exports.RumMetricResponseCompute = RumMetricResponseCompute;
/**
 * @ignore
 */
RumMetricResponseCompute.attributeTypeMap = {
    aggregationType: {
        baseName: "aggregation_type",
        type: "RumMetricComputeAggregationType",
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
//# sourceMappingURL=RumMetricResponseCompute.js.map