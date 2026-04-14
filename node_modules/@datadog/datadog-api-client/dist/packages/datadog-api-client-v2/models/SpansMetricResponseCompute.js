"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpansMetricResponseCompute = void 0;
/**
 * The compute rule to compute the span-based metric.
 */
class SpansMetricResponseCompute {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SpansMetricResponseCompute.attributeTypeMap;
    }
}
exports.SpansMetricResponseCompute = SpansMetricResponseCompute;
/**
 * @ignore
 */
SpansMetricResponseCompute.attributeTypeMap = {
    aggregationType: {
        baseName: "aggregation_type",
        type: "SpansMetricComputeAggregationType",
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
//# sourceMappingURL=SpansMetricResponseCompute.js.map