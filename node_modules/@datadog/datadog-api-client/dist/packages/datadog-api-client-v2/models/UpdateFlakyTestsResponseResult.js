"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFlakyTestsResponseResult = void 0;
/**
 * Result of updating a single flaky test state.
 */
class UpdateFlakyTestsResponseResult {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UpdateFlakyTestsResponseResult.attributeTypeMap;
    }
}
exports.UpdateFlakyTestsResponseResult = UpdateFlakyTestsResponseResult;
/**
 * @ignore
 */
UpdateFlakyTestsResponseResult.attributeTypeMap = {
    error: {
        baseName: "error",
        type: "string",
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    success: {
        baseName: "success",
        type: "boolean",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UpdateFlakyTestsResponseResult.js.map