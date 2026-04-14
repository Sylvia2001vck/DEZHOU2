"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsQueryOptions = void 0;
/**
 * Global query options that are used during the query.
 * Note: These fields are currently deprecated and do not affect the query results.
 */
class LogsQueryOptions {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsQueryOptions.attributeTypeMap;
    }
}
exports.LogsQueryOptions = LogsQueryOptions;
/**
 * @ignore
 */
LogsQueryOptions.attributeTypeMap = {
    timeOffset: {
        baseName: "timeOffset",
        type: "number",
        format: "int64",
    },
    timezone: {
        baseName: "timezone",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsQueryOptions.js.map