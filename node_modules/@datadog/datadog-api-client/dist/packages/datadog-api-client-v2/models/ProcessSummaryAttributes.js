"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessSummaryAttributes = void 0;
/**
 * Attributes for a process summary.
 */
class ProcessSummaryAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ProcessSummaryAttributes.attributeTypeMap;
    }
}
exports.ProcessSummaryAttributes = ProcessSummaryAttributes;
/**
 * @ignore
 */
ProcessSummaryAttributes.attributeTypeMap = {
    cmdline: {
        baseName: "cmdline",
        type: "string",
    },
    host: {
        baseName: "host",
        type: "string",
    },
    pid: {
        baseName: "pid",
        type: "number",
        format: "int64",
    },
    ppid: {
        baseName: "ppid",
        type: "number",
        format: "int64",
    },
    start: {
        baseName: "start",
        type: "string",
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    timestamp: {
        baseName: "timestamp",
        type: "string",
    },
    user: {
        baseName: "user",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ProcessSummaryAttributes.js.map