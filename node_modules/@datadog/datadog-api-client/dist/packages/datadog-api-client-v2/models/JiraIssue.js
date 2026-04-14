"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JiraIssue = void 0;
/**
 * Jira issue attached to case
 */
class JiraIssue {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return JiraIssue.attributeTypeMap;
    }
}
exports.JiraIssue = JiraIssue;
/**
 * @ignore
 */
JiraIssue.attributeTypeMap = {
    result: {
        baseName: "result",
        type: "JiraIssueResult",
    },
    status: {
        baseName: "status",
        type: "Case3rdPartyTicketStatus",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=JiraIssue.js.map