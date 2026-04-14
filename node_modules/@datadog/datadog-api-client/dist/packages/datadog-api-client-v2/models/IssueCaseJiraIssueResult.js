"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueCaseJiraIssueResult = void 0;
/**
 * Contains the identifiers and URL for a successfully created Jira issue.
 */
class IssueCaseJiraIssueResult {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IssueCaseJiraIssueResult.attributeTypeMap;
    }
}
exports.IssueCaseJiraIssueResult = IssueCaseJiraIssueResult;
/**
 * @ignore
 */
IssueCaseJiraIssueResult.attributeTypeMap = {
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
    projectKey: {
        baseName: "project_key",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IssueCaseJiraIssueResult.js.map