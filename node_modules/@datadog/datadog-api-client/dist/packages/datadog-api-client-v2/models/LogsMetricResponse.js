"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsMetricResponse = void 0;
/**
 * The log-based metric object.
 */
class LogsMetricResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsMetricResponse.attributeTypeMap;
    }
}
exports.LogsMetricResponse = LogsMetricResponse;
/**
 * @ignore
 */
LogsMetricResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "LogsMetricResponseData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsMetricResponse.js.map