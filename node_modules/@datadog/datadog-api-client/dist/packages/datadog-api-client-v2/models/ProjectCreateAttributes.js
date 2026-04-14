"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectCreateAttributes = void 0;
/**
 * Project creation attributes
 */
class ProjectCreateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ProjectCreateAttributes.attributeTypeMap;
    }
}
exports.ProjectCreateAttributes = ProjectCreateAttributes;
/**
 * @ignore
 */
ProjectCreateAttributes.attributeTypeMap = {
    enabledCustomCaseTypes: {
        baseName: "enabled_custom_case_types",
        type: "Array<string>",
    },
    key: {
        baseName: "key",
        type: "string",
        required: true,
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    teamUuid: {
        baseName: "team_uuid",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ProjectCreateAttributes.js.map