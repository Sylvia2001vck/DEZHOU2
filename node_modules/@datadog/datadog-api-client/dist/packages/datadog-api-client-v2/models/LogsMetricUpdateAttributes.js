"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsMetricUpdateAttributes = void 0;
/**
 * The log-based metric properties that will be updated.
 */
class LogsMetricUpdateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsMetricUpdateAttributes.attributeTypeMap;
    }
}
exports.LogsMetricUpdateAttributes = LogsMetricUpdateAttributes;
/**
 * @ignore
 */
LogsMetricUpdateAttributes.attributeTypeMap = {
    compute: {
        baseName: "compute",
        type: "LogsMetricUpdateCompute",
    },
    filter: {
        baseName: "filter",
        type: "LogsMetricFilter",
    },
    groupBy: {
        baseName: "group_by",
        type: "Array<LogsMetricGroupBy>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsMetricUpdateAttributes.js.map