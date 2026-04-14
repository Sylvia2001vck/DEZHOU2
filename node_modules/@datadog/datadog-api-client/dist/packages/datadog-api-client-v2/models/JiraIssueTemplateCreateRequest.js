"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JiraIssueTemplateCreateRequest = void 0;
/**
 * Request to create a Jira issue template
 */
class JiraIssueTemplateCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return JiraIssueTemplateCreateRequest.attributeTypeMap;
    }
}
exports.JiraIssueTemplateCreateRequest = JiraIssueTemplateCreateRequest;
/**
 * @ignore
 */
JiraIssueTemplateCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "JiraIssueTemplateCreateRequestData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=JiraIssueTemplateCreateRequest.js.map