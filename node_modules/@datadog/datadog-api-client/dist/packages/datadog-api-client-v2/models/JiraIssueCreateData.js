"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JiraIssueCreateData = void 0;
/**
 * Jira issue creation data
 */
class JiraIssueCreateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return JiraIssueCreateData.attributeTypeMap;
    }
}
exports.JiraIssueCreateData = JiraIssueCreateData;
/**
 * @ignore
 */
JiraIssueCreateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "JiraIssueCreateAttributes",
        required: true,
    },
    type: {
        baseName: "type",
        type: "JiraIssueResourceType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=JiraIssueCreateData.js.map