"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JiraIssueTemplateDataRelationships = void 0;
/**
 * Relationships of a Jira issue template
 */
class JiraIssueTemplateDataRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return JiraIssueTemplateDataRelationships.attributeTypeMap;
    }
}
exports.JiraIssueTemplateDataRelationships = JiraIssueTemplateDataRelationships;
/**
 * @ignore
 */
JiraIssueTemplateDataRelationships.attributeTypeMap = {
    jiraAccount: {
        baseName: "jira-account",
        type: "JiraAccountRelationship",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=JiraIssueTemplateDataRelationships.js.map