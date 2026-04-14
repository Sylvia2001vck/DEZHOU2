"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlakyTestHistory = void 0;
/**
 * A single history entry representing a status change for a flaky test.
 */
class FlakyTestHistory {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FlakyTestHistory.attributeTypeMap;
    }
}
exports.FlakyTestHistory = FlakyTestHistory;
/**
 * @ignore
 */
FlakyTestHistory.attributeTypeMap = {
    commitSha: {
        baseName: "commit_sha",
        type: "string",
        required: true,
    },
    status: {
        baseName: "status",
        type: "string",
        required: true,
    },
    timestamp: {
        baseName: "timestamp",
        type: "number",
        required: true,
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FlakyTestHistory.js.map