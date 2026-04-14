"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpansMetricUpdateCompute = void 0;
/**
 * The compute rule to compute the span-based metric.
 */
class SpansMetricUpdateCompute {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SpansMetricUpdateCompute.attributeTypeMap;
    }
}
exports.SpansMetricUpdateCompute = SpansMetricUpdateCompute;
/**
 * @ignore
 */
SpansMetricUpdateCompute.attributeTypeMap = {
    includePercentiles: {
        baseName: "include_percentiles",
        type: "boolean",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SpansMetricUpdateCompute.js.map