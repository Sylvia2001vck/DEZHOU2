"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssuesSearchResultAttributes = void 0;
/**
 * Object containing the information of a search result.
 */
class IssuesSearchResultAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IssuesSearchResultAttributes.attributeTypeMap;
    }
}
exports.IssuesSearchResultAttributes = IssuesSearchResultAttributes;
/**
 * @ignore
 */
IssuesSearchResultAttributes.attributeTypeMap = {
    impactedSessions: {
        baseName: "impacted_sessions",
        type: "number",
        format: "int64",
    },
    impactedUsers: {
        baseName: "impacted_users",
        type: "number",
        format: "int64",
    },
    totalCount: {
        baseName: "total_count",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IssuesSearchResultAttributes.js.map