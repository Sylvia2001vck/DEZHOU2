"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricOrigin = void 0;
/**
 * Metric origin information.
 */
class MetricOrigin {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricOrigin.attributeTypeMap;
    }
}
exports.MetricOrigin = MetricOrigin;
/**
 * @ignore
 */
MetricOrigin.attributeTypeMap = {
    metricType: {
        baseName: "metric_type",
        type: "number",
        format: "int32",
    },
    product: {
        baseName: "product",
        type: "number",
        format: "int32",
    },
    service: {
        baseName: "service",
        type: "number",
        format: "int32",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MetricOrigin.js.map