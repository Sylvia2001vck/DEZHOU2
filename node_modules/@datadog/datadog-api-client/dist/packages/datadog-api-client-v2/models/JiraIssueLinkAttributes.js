"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JiraIssueLinkAttributes = void 0;
/**
 * Jira issue link attributes
 */
class JiraIssueLinkAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return JiraIssueLinkAttributes.attributeTypeMap;
    }
}
exports.JiraIssueLinkAttributes = JiraIssueLinkAttributes;
/**
 * @ignore
 */
JiraIssueLinkAttributes.attributeTypeMap = {
    jiraIssueUrl: {
        baseName: "jira_issue_url",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=JiraIssueLinkAttributes.js.map