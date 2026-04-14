"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsMetricResponseData = void 0;
/**
 * The log-based metric properties.
 */
class LogsMetricResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsMetricResponseData.attributeTypeMap;
    }
}
exports.LogsMetricResponseData = LogsMetricResponseData;
/**
 * @ignore
 */
LogsMetricResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "LogsMetricResponseAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "LogsMetricType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsMetricResponseData.js.map