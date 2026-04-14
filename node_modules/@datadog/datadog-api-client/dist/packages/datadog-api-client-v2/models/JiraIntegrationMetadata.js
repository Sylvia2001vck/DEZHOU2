"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JiraIntegrationMetadata = void 0;
/**
 * Incident integration metadata for the Jira integration.
 */
class JiraIntegrationMetadata {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return JiraIntegrationMetadata.attributeTypeMap;
    }
}
exports.JiraIntegrationMetadata = JiraIntegrationMetadata;
/**
 * @ignore
 */
JiraIntegrationMetadata.attributeTypeMap = {
    issues: {
        baseName: "issues",
        type: "Array<JiraIntegrationMetadataIssuesItem>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=JiraIntegrationMetadata.js.map