"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsMetricFilter = void 0;
/**
 * The log-based metric filter. Logs matching this filter will be aggregated in this metric.
 */
class LogsMetricFilter {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsMetricFilter.attributeTypeMap;
    }
}
exports.LogsMetricFilter = LogsMetricFilter;
/**
 * @ignore
 */
LogsMetricFilter.attributeTypeMap = {
    query: {
        baseName: "query",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsMetricFilter.js.map