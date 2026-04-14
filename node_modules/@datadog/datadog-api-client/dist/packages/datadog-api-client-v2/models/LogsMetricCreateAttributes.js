"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsMetricCreateAttributes = void 0;
/**
 * The object describing the Datadog log-based metric to create.
 */
class LogsMetricCreateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsMetricCreateAttributes.attributeTypeMap;
    }
}
exports.LogsMetricCreateAttributes = LogsMetricCreateAttributes;
/**
 * @ignore
 */
LogsMetricCreateAttributes.attributeTypeMap = {
    compute: {
        baseName: "compute",
        type: "LogsMetricCompute",
        required: true,
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
//# sourceMappingURL=LogsMetricCreateAttributes.js.map