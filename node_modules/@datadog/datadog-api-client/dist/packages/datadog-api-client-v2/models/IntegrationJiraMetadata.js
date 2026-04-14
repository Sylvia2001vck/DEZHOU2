"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationJiraMetadata = void 0;
class IntegrationJiraMetadata {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IntegrationJiraMetadata.attributeTypeMap;
    }
}
exports.IntegrationJiraMetadata = IntegrationJiraMetadata;
/**
 * @ignore
 */
IntegrationJiraMetadata.attributeTypeMap = {
    accountId: {
        baseName: "account_id",
        type: "string",
    },
    issueTypeId: {
        baseName: "issue_type_id",
        type: "string",
    },
    projectId: {
        baseName: "project_id",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IntegrationJiraMetadata.js.map