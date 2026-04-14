"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsMetricUpdateRequest = void 0;
/**
 * The new log-based metric body.
 */
class LogsMetricUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsMetricUpdateRequest.attributeTypeMap;
    }
}
exports.LogsMetricUpdateRequest = LogsMetricUpdateRequest;
/**
 * @ignore
 */
LogsMetricUpdateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "LogsMetricUpdateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsMetricUpdateRequest.js.map