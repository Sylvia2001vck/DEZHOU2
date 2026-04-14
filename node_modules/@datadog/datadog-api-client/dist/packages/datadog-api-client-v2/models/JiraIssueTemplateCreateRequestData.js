"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JiraIssueTemplateCreateRequestData = void 0;
/**
 * Data object for creating a Jira issue template
 */
class JiraIssueTemplateCreateRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return JiraIssueTemplateCreateRequestData.attributeTypeMap;
    }
}
exports.JiraIssueTemplateCreateRequestData = JiraIssueTemplateCreateRequestData;
/**
 * @ignore
 */
JiraIssueTemplateCreateRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "JiraIssueTemplateCreateRequestAttributes",
    },
    type: {
        baseName: "type",
        type: "JiraIssueTemplateType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=JiraIssueTemplateCreateRequestData.js.map