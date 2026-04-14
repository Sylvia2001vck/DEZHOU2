"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsMetricGroupBy = void 0;
/**
 * A group by rule.
 */
class LogsMetricGroupBy {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsMetricGroupBy.attributeTypeMap;
    }
}
exports.LogsMetricGroupBy = LogsMetricGroupBy;
/**
 * @ignore
 */
LogsMetricGroupBy.attributeTypeMap = {
    path: {
        baseName: "path",
        type: "string",
        required: true,
    },
    tagName: {
        baseName: "tag_name",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsMetricGroupBy.js.map