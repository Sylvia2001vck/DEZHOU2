"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsMetricCompute = void 0;
/**
 * The compute rule to compute the log-based metric.
 */
class LogsMetricCompute {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsMetricCompute.attributeTypeMap;
    }
}
exports.LogsMetricCompute = LogsMetricCompute;
/**
 * @ignore
 */
LogsMetricCompute.attributeTypeMap = {
    aggregationType: {
        baseName: "aggregation_type",
        type: "LogsMetricComputeAggregationType",
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
//# sourceMappingURL=LogsMetricCompute.js.map