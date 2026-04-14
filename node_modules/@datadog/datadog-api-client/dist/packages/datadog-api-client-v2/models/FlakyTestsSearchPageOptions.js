"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlakyTestsSearchPageOptions = void 0;
/**
 * Pagination attributes for listing flaky tests.
 */
class FlakyTestsSearchPageOptions {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FlakyTestsSearchPageOptions.attributeTypeMap;
    }
}
exports.FlakyTestsSearchPageOptions = FlakyTestsSearchPageOptions;
/**
 * @ignore
 */
FlakyTestsSearchPageOptions.attributeTypeMap = {
    cursor: {
        baseName: "cursor",
        type: "string",
    },
    limit: {
        baseName: "limit",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FlakyTestsSearchPageOptions.js.map