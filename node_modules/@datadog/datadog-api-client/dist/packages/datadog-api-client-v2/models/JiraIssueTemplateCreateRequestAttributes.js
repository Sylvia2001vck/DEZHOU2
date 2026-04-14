"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JiraIssueTemplateCreateRequestAttributes = void 0;
/**
 * Attributes for creating a Jira issue template
 */
class JiraIssueTemplateCreateRequestAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return JiraIssueTemplateCreateRequestAttributes.attributeTypeMap;
    }
}
exports.JiraIssueTemplateCreateRequestAttributes = JiraIssueTemplateCreateRequestAttributes;
/**
 * @ignore
 */
JiraIssueTemplateCreateRequestAttributes.attributeTypeMap = {
    fields: {
        baseName: "fields",
        type: "{ [key: string]: any; }",
    },
    issueTypeId: {
        baseName: "issue_type_id",
        type: "string",
    },
    jiraAccount: {
        baseName: "jira-account",
        type: "JiraIssueTemplateCreateRequestAttributesJiraAccount",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    projectId: {
        baseName: "project_id",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=JiraIssueTemplateCreateRequestAttributes.js.map