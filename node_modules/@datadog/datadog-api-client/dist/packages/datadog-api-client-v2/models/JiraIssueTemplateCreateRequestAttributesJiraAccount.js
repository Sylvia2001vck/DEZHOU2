"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JiraIssueTemplateCreateRequestAttributesJiraAccount = void 0;
/**
 * Reference to the Jira account
 */
class JiraIssueTemplateCreateRequestAttributesJiraAccount {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return JiraIssueTemplateCreateRequestAttributesJiraAccount.attributeTypeMap;
    }
}
exports.JiraIssueTemplateCreateRequestAttributesJiraAccount = JiraIssueTemplateCreateRequestAttributesJiraAccount;
/**
 * @ignore
 */
JiraIssueTemplateCreateRequestAttributesJiraAccount.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
        format: "uuid",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=JiraIssueTemplateCreateRequestAttributesJiraAccount.js.map