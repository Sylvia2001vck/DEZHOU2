"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JiraIssueTemplateDataAttributes = void 0;
/**
 * Attributes of a Jira issue template
 */
class JiraIssueTemplateDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return JiraIssueTemplateDataAttributes.attributeTypeMap;
    }
}
exports.JiraIssueTemplateDataAttributes = JiraIssueTemplateDataAttributes;
/**
 * @ignore
 */
JiraIssueTemplateDataAttributes.attributeTypeMap = {
    fields: {
        baseName: "fields",
        type: "{ [key: string]: any; }",
        required: true,
    },
    issueTypeId: {
        baseName: "issue_type_id",
        type: "string",
        required: true,
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    projectId: {
        baseName: "project_id",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=JiraIssueTemplateDataAttributes.js.map