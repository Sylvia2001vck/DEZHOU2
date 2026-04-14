"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlakyTestRunMetadata = void 0;
/**
 * Metadata about the latest failed test run of the flaky test.
 */
class FlakyTestRunMetadata {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FlakyTestRunMetadata.attributeTypeMap;
    }
}
exports.FlakyTestRunMetadata = FlakyTestRunMetadata;
/**
 * @ignore
 */
FlakyTestRunMetadata.attributeTypeMap = {
    durationMs: {
        baseName: "duration_ms",
        type: "number",
        format: "int64",
    },
    errorMessage: {
        baseName: "error_message",
        type: "string",
    },
    errorStack: {
        baseName: "error_stack",
        type: "string",
    },
    sourceEnd: {
        baseName: "source_end",
        type: "number",
        format: "int64",
    },
    sourceFile: {
        baseName: "source_file",
        type: "string",
    },
    sourceStart: {
        baseName: "source_start",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FlakyTestRunMetadata.js.map