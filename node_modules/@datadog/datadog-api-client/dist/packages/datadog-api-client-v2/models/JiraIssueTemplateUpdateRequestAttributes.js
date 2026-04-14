"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JiraIssueTemplateUpdateRequestAttributes = void 0;
/**
 * Attributes for updating a Jira issue template
 */
class JiraIssueTemplateUpdateRequestAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return JiraIssueTemplateUpdateRequestAttributes.attributeTypeMap;
    }
}
exports.JiraIssueTemplateUpdateRequestAttributes = JiraIssueTemplateUpdateRequestAttributes;
/**
 * @ignore
 */
JiraIssueTemplateUpdateRequestAttributes.attributeTypeMap = {
    fields: {
        baseName: "fields",
        type: "{ [key: string]: any; }",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=JiraIssueTemplateUpdateRequestAttributes.js.map