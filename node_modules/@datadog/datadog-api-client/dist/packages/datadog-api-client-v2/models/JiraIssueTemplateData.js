"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JiraIssueTemplateData = void 0;
/**
 * Data object for a Jira issue template
 */
class JiraIssueTemplateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return JiraIssueTemplateData.attributeTypeMap;
    }
}
exports.JiraIssueTemplateData = JiraIssueTemplateData;
/**
 * @ignore
 */
JiraIssueTemplateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "JiraIssueTemplateDataAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
        format: "uuid",
    },
    relationships: {
        baseName: "relationships",
        type: "JiraIssueTemplateDataRelationships",
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
//# sourceMappingURL=JiraIssueTemplateData.js.map