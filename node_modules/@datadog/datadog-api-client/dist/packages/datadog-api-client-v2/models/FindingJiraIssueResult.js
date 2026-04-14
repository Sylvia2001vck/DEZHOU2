"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindingJiraIssueResult = void 0;
/**
 * Result of the Jira issue creation.
 */
class FindingJiraIssueResult {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FindingJiraIssueResult.attributeTypeMap;
    }
}
exports.FindingJiraIssueResult = FindingJiraIssueResult;
/**
 * @ignore
 */
FindingJiraIssueResult.attributeTypeMap = {
    accountId: {
        baseName: "account_id",
        type: "string",
    },
    issueId: {
        baseName: "issue_id",
        type: "string",
    },
    issueKey: {
        baseName: "issue_key",
        type: "string",
    },
    issueUrl: {
        baseName: "issue_url",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FindingJiraIssueResult.js.map