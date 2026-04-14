"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RumMetricFilter = void 0;
/**
 * The rum-based metric filter. Events matching this filter will be aggregated in this metric.
 */
class RumMetricFilter {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RumMetricFilter.attributeTypeMap;
    }
}
exports.RumMetricFilter = RumMetricFilter;
/**
 * @ignore
 */
RumMetricFilter.attributeTypeMap = {
    query: {
        baseName: "query",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RumMetricFilter.js.map