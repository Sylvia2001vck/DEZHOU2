"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsMetricUpdateData = void 0;
/**
 * The new log-based metric properties.
 */
class LogsMetricUpdateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsMetricUpdateData.attributeTypeMap;
    }
}
exports.LogsMetricUpdateData = LogsMetricUpdateData;
/**
 * @ignore
 */
LogsMetricUpdateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "LogsMetricUpdateAttributes",
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
//# sourceMappingURL=LogsMetricUpdateData.js.map