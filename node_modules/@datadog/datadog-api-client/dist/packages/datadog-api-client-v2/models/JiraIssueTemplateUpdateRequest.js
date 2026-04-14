"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JiraIssueTemplateUpdateRequest = void 0;
/**
 * Request to update a Jira issue template
 */
class JiraIssueTemplateUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return JiraIssueTemplateUpdateRequest.attributeTypeMap;
    }
}
exports.JiraIssueTemplateUpdateRequest = JiraIssueTemplateUpdateRequest;
/**
 * @ignore
 */
JiraIssueTemplateUpdateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "JiraIssueTemplateUpdateRequestData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=JiraIssueTemplateUpdateRequest.js.map