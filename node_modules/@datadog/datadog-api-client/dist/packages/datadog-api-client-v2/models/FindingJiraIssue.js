"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindingJiraIssue = void 0;
/**
 * Jira issue associated with the case.
 */
class FindingJiraIssue {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FindingJiraIssue.attributeTypeMap;
    }
}
exports.FindingJiraIssue = FindingJiraIssue;
/**
 * @ignore
 */
FindingJiraIssue.attributeTypeMap = {
    errorMessage: {
        baseName: "error_message",
        type: "string",
    },
    result: {
        baseName: "result",
        type: "FindingJiraIssueResult",
    },
    status: {
        baseName: "status",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FindingJiraIssue.js.map