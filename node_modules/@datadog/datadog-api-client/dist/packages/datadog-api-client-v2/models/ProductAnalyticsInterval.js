"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductAnalyticsInterval = void 0;
/**
 * An interval definition in a timeseries response.
 */
class ProductAnalyticsInterval {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ProductAnalyticsInterval.attributeTypeMap;
    }
}
exports.ProductAnalyticsInterval = ProductAnalyticsInterval;
/**
 * @ignore
 */
ProductAnalyticsInterval.attributeTypeMap = {
    milliseconds: {
        baseName: "milliseconds",
        type: "number",
        format: "int64",
    },
    startTime: {
        baseName: "start_time",
        type: "number",
        format: "int64",
    },
    times: {
        baseName: "times",
        type: "Array<number>",
    },
    type: {
        baseName: "type",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ProductAnalyticsInterval.js.map