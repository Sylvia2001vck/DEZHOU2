"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RumMetricResponseFilter = void 0;
/**
 * The rum-based metric filter. RUM events matching this filter will be aggregated in this metric.
 */
class RumMetricResponseFilter {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RumMetricResponseFilter.attributeTypeMap;
    }
}
exports.RumMetricResponseFilter = RumMetricResponseFilter;
/**
 * @ignore
 */
RumMetricResponseFilter.attributeTypeMap = {
    query: {
        baseName: "query",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RumMetricResponseFilter.js.map