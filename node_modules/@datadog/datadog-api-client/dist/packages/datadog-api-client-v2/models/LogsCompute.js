"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsCompute = void 0;
/**
 * A compute rule to compute metrics or timeseries
 */
class LogsCompute {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsCompute.attributeTypeMap;
    }
}
exports.LogsCompute = LogsCompute;
/**
 * @ignore
 */
LogsCompute.attributeTypeMap = {
    aggregation: {
        baseName: "aggregation",
        type: "LogsAggregationFunction",
        required: true,
    },
    interval: {
        baseName: "interval",
        type: "string",
    },
    metric: {
        baseName: "metric",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "LogsComputeType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsCompute.js.map