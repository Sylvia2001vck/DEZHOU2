"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsMetricResponseAttributes = void 0;
/**
 * The object describing a Datadog log-based metric.
 */
class LogsMetricResponseAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsMetricResponseAttributes.attributeTypeMap;
    }
}
exports.LogsMetricResponseAttributes = LogsMetricResponseAttributes;
/**
 * @ignore
 */
LogsMetricResponseAttributes.attributeTypeMap = {
    compute: {
        baseName: "compute",
        type: "LogsMetricResponseCompute",
    },
    filter: {
        baseName: "filter",
        type: "LogsMetricResponseFilter",
    },
    groupBy: {
        baseName: "group_by",
        type: "Array<LogsMetricResponseGroupBy>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsMetricResponseAttributes.js.map