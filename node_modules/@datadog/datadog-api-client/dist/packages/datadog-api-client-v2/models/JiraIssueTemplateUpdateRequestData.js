"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JiraIssueTemplateUpdateRequestData = void 0;
/**
 * Data object for updating a Jira issue template
 */
class JiraIssueTemplateUpdateRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return JiraIssueTemplateUpdateRequestData.attributeTypeMap;
    }
}
exports.JiraIssueTemplateUpdateRequestData = JiraIssueTemplateUpdateRequestData;
/**
 * @ignore
 */
JiraIssueTemplateUpdateRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "JiraIssueTemplateUpdateRequestAttributes",
        required: true,
    },
    type: {
        baseName: "type",
        type: "JiraIssueTemplateType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=JiraIssueTemplateUpdateRequestData.js.map