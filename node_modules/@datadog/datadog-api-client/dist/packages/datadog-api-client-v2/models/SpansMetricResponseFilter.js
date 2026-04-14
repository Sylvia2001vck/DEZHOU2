"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpansMetricResponseFilter = void 0;
/**
 * The span-based metric filter. Spans matching this filter will be aggregated in this metric.
 */
class SpansMetricResponseFilter {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SpansMetricResponseFilter.attributeTypeMap;
    }
}
exports.SpansMetricResponseFilter = SpansMetricResponseFilter;
/**
 * @ignore
 */
SpansMetricResponseFilter.attributeTypeMap = {
    query: {
        baseName: "query",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SpansMetricResponseFilter.js.map