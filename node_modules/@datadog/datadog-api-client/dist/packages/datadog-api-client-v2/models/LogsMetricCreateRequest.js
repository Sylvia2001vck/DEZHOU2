"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsMetricCreateRequest = void 0;
/**
 * The new log-based metric body.
 */
class LogsMetricCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsMetricCreateRequest.attributeTypeMap;
    }
}
exports.LogsMetricCreateRequest = LogsMetricCreateRequest;
/**
 * @ignore
 */
LogsMetricCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "LogsMetricCreateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsMetricCreateRequest.js.map