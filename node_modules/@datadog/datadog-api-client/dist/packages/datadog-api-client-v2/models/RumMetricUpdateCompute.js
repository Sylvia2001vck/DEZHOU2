"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RumMetricUpdateCompute = void 0;
/**
 * The compute rule to compute the rum-based metric.
 */
class RumMetricUpdateCompute {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RumMetricUpdateCompute.attributeTypeMap;
    }
}
exports.RumMetricUpdateCompute = RumMetricUpdateCompute;
/**
 * @ignore
 */
RumMetricUpdateCompute.attributeTypeMap = {
    includePercentiles: {
        baseName: "include_percentiles",
        type: "boolean",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RumMetricUpdateCompute.js.map