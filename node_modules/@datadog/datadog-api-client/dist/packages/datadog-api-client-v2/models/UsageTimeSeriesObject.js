"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageTimeSeriesObject = void 0;
/**
 * Usage timeseries data.
 */
class UsageTimeSeriesObject {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageTimeSeriesObject.attributeTypeMap;
    }
}
exports.UsageTimeSeriesObject = UsageTimeSeriesObject;
/**
 * @ignore
 */
UsageTimeSeriesObject.attributeTypeMap = {
    timestamp: {
        baseName: "timestamp",
        type: "Date",
        format: "date-time",
    },
    value: {
        baseName: "value",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageTimeSeriesObject.js.map