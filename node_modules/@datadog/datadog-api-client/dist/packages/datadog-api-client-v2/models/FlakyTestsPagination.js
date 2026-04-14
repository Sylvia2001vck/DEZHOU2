"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlakyTestsPagination = void 0;
/**
 * Pagination metadata for flaky tests.
 */
class FlakyTestsPagination {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FlakyTestsPagination.attributeTypeMap;
    }
}
exports.FlakyTestsPagination = FlakyTestsPagination;
/**
 * @ignore
 */
FlakyTestsPagination.attributeTypeMap = {
    nextPage: {
        baseName: "next_page",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FlakyTestsPagination.js.map