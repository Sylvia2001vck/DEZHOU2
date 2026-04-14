"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JiraIssueCreateAttributes = void 0;
/**
 * Jira issue creation attributes
 */
class JiraIssueCreateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return JiraIssueCreateAttributes.attributeTypeMap;
    }
}
exports.JiraIssueCreateAttributes = JiraIssueCreateAttributes;
/**
 * @ignore
 */
JiraIssueCreateAttributes.attributeTypeMap = {
    fields: {
        baseName: "fields",
        type: "{ [key: string]: any; }",
    },
    issueTypeId: {
        baseName: "issue_type_id",
        type: "string",
        required: true,
    },
    jiraAccountId: {
        baseName: "jira_account_id",
        type: "string",
        required: true,
    },
    projectId: {
        baseName: "project_id",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=JiraIssueCreateAttributes.js.map