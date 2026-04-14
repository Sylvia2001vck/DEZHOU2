"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JiraIssueTemplateResponse = void 0;
/**
 * Response containing a single Jira issue template
 */
class JiraIssueTemplateResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return JiraIssueTemplateResponse.attributeTypeMap;
    }
}
exports.JiraIssueTemplateResponse = JiraIssueTemplateResponse;
/**
 * @ignore
 */
JiraIssueTemplateResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "JiraIssueTemplateData",
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
//# sourceMappingURL=JiraIssueTemplateResponse.js.map