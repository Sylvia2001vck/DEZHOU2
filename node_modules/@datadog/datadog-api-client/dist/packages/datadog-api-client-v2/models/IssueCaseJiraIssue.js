"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueCaseJiraIssue = void 0;
/**
 * Jira issue of the case.
 */
class IssueCaseJiraIssue {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IssueCaseJiraIssue.attributeTypeMap;
    }
}
exports.IssueCaseJiraIssue = IssueCaseJiraIssue;
/**
 * @ignore
 */
IssueCaseJiraIssue.attributeTypeMap = {
    result: {
        baseName: "result",
        type: "IssueCaseJiraIssueResult",
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
//# sourceMappingURL=IssueCaseJiraIssue.js.map