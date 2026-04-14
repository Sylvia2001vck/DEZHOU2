"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListFindingsPage = void 0;
/**
 * Pagination and findings count information.
 */
class ListFindingsPage {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ListFindingsPage.attributeTypeMap;
    }
}
exports.ListFindingsPage = ListFindingsPage;
/**
 * @ignore
 */
ListFindingsPage.attributeTypeMap = {
    cursor: {
        baseName: "cursor",
        type: "string",
    },
    totalFilteredCount: {
        baseName: "total_filtered_count",
        type: "number",
        format: "int64",
    },
};
//# sourceMappingURL=ListFindingsPage.js.map