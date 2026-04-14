"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JiraIssueLinkData = void 0;
/**
 * Jira issue link data
 */
class JiraIssueLinkData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return JiraIssueLinkData.attributeTypeMap;
    }
}
exports.JiraIssueLinkData = JiraIssueLinkData;
/**
 * @ignore
 */
JiraIssueLinkData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "JiraIssueLinkAttributes",
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
//# sourceMappingURL=JiraIssueLinkData.js.map