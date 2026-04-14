"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueCaseAttributes = void 0;
/**
 * Object containing the information of a case.
 */
class IssueCaseAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IssueCaseAttributes.attributeTypeMap;
    }
}
exports.IssueCaseAttributes = IssueCaseAttributes;
/**
 * @ignore
 */
IssueCaseAttributes.attributeTypeMap = {
    archivedAt: {
        baseName: "archived_at",
        type: "Date",
        format: "date-time",
    },
    closedAt: {
        baseName: "closed_at",
        type: "Date",
        format: "date-time",
    },
    createdAt: {
        baseName: "created_at",
        type: "Date",
        format: "date-time",
    },
    creationSource: {
        baseName: "creation_source",
        type: "string",
    },
    description: {
        baseName: "description",
        type: "string",
    },
    dueDate: {
        baseName: "due_date",
        type: "string",
    },
    insights: {
        baseName: "insights",
        type: "Array<IssueCaseInsight>",
    },
    jiraIssue: {
        baseName: "jira_issue",
        type: "IssueCaseJiraIssue",
    },
    key: {
        baseName: "key",
        type: "string",
    },
    modifiedAt: {
        baseName: "modified_at",
        type: "Date",
        format: "date-time",
    },
    priority: {
        baseName: "priority",
        type: "CasePriority",
    },
    status: {
        baseName: "status",
        type: "CaseStatus",
    },
    title: {
        baseName: "title",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IssueCaseAttributes.js.map