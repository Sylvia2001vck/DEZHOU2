"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductAnalyticsCompute = void 0;
/**
 * A compute rule for aggregating data.
 */
class ProductAnalyticsCompute {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ProductAnalyticsCompute.attributeTypeMap;
    }
}
exports.ProductAnalyticsCompute = ProductAnalyticsCompute;
/**
 * @ignore
 */
ProductAnalyticsCompute.attributeTypeMap = {
    aggregation: {
        baseName: "aggregation",
        type: "string",
        required: true,
    },
    interval: {
        baseName: "interval",
        type: "number",
        format: "int64",
    },
    metric: {
        baseName: "metric",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ProductAnalyticsCompute.js.map