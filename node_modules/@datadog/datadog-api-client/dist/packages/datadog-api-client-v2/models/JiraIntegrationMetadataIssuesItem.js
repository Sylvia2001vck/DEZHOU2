"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JiraIntegrationMetadataIssuesItem = void 0;
/**
 * Item in the Jira integration metadata issue array.
 */
class JiraIntegrationMetadataIssuesItem {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return JiraIntegrationMetadataIssuesItem.attributeTypeMap;
    }
}
exports.JiraIntegrationMetadataIssuesItem = JiraIntegrationMetadataIssuesItem;
/**
 * @ignore
 */
JiraIntegrationMetadataIssuesItem.attributeTypeMap = {
    account: {
        baseName: "account",
        type: "string",
        required: true,
    },
    issueKey: {
        baseName: "issue_key",
        type: "string",
    },
    issuetypeId: {
        baseName: "issuetype_id",
        type: "string",
    },
    projectKey: {
        baseName: "project_key",
        type: "string",
        required: true,
    },
    redirectUrl: {
        baseName: "redirect_url",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=JiraIntegrationMetadataIssuesItem.js.map