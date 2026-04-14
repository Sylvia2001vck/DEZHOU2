"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationJiraSyncDueDate = void 0;
class IntegrationJiraSyncDueDate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IntegrationJiraSyncDueDate.attributeTypeMap;
    }
}
exports.IntegrationJiraSyncDueDate = IntegrationJiraSyncDueDate;
/**
 * @ignore
 */
IntegrationJiraSyncDueDate.attributeTypeMap = {
    jiraFieldId: {
        baseName: "jira_field_id",
        type: "string",
    },
    syncType: {
        baseName: "sync_type",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IntegrationJiraSyncDueDate.js.map