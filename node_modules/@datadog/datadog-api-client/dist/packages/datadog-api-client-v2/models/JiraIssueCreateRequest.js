"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JiraIssueCreateRequest = void 0;
/**
 * Jira issue creation request
 */
class JiraIssueCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return JiraIssueCreateRequest.attributeTypeMap;
    }
}
exports.JiraIssueCreateRequest = JiraIssueCreateRequest;
/**
 * @ignore
 */
JiraIssueCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "JiraIssueCreateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=JiraIssueCreateRequest.js.map