"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsAggregateBucketValueTimeseriesPoint = void 0;
/**
 * A timeseries point
 */
class LogsAggregateBucketValueTimeseriesPoint {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsAggregateBucketValueTimeseriesPoint.attributeTypeMap;
    }
}
exports.LogsAggregateBucketValueTimeseriesPoint = LogsAggregateBucketValueTimeseriesPoint;
/**
 * @ignore
 */
LogsAggregateBucketValueTimeseriesPoint.attributeTypeMap = {
    time: {
        baseName: "time",
        type: "string",
    },
    value: {
        baseName: "value",
        type: "number",
        format: "double",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsAggregateBucketValueTimeseriesPoint.js.map