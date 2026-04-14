"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsMetricResponseCompute = void 0;
/**
 * The compute rule to compute the log-based metric.
 */
class LogsMetricResponseCompute {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsMetricResponseCompute.attributeTypeMap;
    }
}
exports.LogsMetricResponseCompute = LogsMetricResponseCompute;
/**
 * @ignore
 */
LogsMetricResponseCompute.attributeTypeMap = {
    aggregationType: {
        baseName: "aggregation_type",
        type: "LogsMetricResponseComputeAggregationType",
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
//# sourceMappingURL=LogsMetricResponseCompute.js.map