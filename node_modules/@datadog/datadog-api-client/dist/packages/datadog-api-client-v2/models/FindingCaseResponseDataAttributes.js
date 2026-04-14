"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindingCaseResponseDataAttributes = void 0;
/**
 * Attributes of the case.
 */
class FindingCaseResponseDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FindingCaseResponseDataAttributes.attributeTypeMap;
    }
}
exports.FindingCaseResponseDataAttributes = FindingCaseResponseDataAttributes;
/**
 * @ignore
 */
FindingCaseResponseDataAttributes.attributeTypeMap = {
    archivedAt: {
        baseName: "archived_at",
        type: "Date",
        format: "date-time",
    },
    assignedTo: {
        baseName: "assigned_to",
        type: "RelationshipToUser",
    },
    attributes: {
        baseName: "attributes",
        type: "{ [key: string]: Array<string>; }",
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
        type: "Array<CaseInsightsItems>",
    },
    jiraIssue: {
        baseName: "jira_issue",
        type: "FindingJiraIssue",
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
        type: "string",
    },
    status: {
        baseName: "status",
        type: "string",
    },
    statusGroup: {
        baseName: "status_group",
        type: "string",
    },
    statusName: {
        baseName: "status_name",
        type: "string",
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
//# sourceMappingURL=FindingCaseResponseDataAttributes.js.map