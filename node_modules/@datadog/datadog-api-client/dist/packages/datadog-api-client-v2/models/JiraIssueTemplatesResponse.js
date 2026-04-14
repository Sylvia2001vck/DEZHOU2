"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JiraIssueTemplatesResponse = void 0;
/**
 * Response containing Jira issue templates
 */
class JiraIssueTemplatesResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return JiraIssueTemplatesResponse.attributeTypeMap;
    }
}
exports.JiraIssueTemplatesResponse = JiraIssueTemplatesResponse;
/**
 * @ignore
 */
JiraIssueTemplatesResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<JiraIssueTemplateData>",
        required: true,
    },
    included: {
        baseName: "included",
        type: "Array<JiraAccountData>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=JiraIssueTemplatesResponse.js.map