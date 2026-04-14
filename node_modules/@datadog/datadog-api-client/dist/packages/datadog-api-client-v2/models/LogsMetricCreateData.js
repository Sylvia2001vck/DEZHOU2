"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsMetricCreateData = void 0;
/**
 * The new log-based metric properties.
 */
class LogsMetricCreateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsMetricCreateData.attributeTypeMap;
    }
}
exports.LogsMetricCreateData = LogsMetricCreateData;
/**
 * @ignore
 */
LogsMetricCreateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "LogsMetricCreateAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "LogsMetricType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsMetricCreateData.js.map