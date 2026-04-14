"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsMetricsResponse = void 0;
/**
 * All the available log-based metric objects.
 */
class LogsMetricsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsMetricsResponse.attributeTypeMap;
    }
}
exports.LogsMetricsResponse = LogsMetricsResponse;
/**
 * @ignore
 */
LogsMetricsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<LogsMetricResponseData>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsMetricsResponse.js.map