"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JiraIssueResult = void 0;
/**
 * Jira issue information
 */
class JiraIssueResult {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return JiraIssueResult.attributeTypeMap;
    }
}
exports.JiraIssueResult = JiraIssueResult;
/**
 * @ignore
 */
JiraIssueResult.attributeTypeMap = {
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
//# sourceMappingURL=JiraIssueResult.js.map