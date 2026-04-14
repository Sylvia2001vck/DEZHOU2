"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobDefinitionFromRule = void 0;
/**
 * Definition of a threat hunting job based on a security monitoring rule.
 */
class JobDefinitionFromRule {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return JobDefinitionFromRule.attributeTypeMap;
    }
}
exports.JobDefinitionFromRule = JobDefinitionFromRule;
/**
 * @ignore
 */
JobDefinitionFromRule.attributeTypeMap = {
    from: {
        baseName: "from",
        type: "number",
        required: true,
        format: "int64",
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    index: {
        baseName: "index",
        type: "string",
        required: true,
    },
    notifications: {
        baseName: "notifications",
        type: "Array<string>",
    },
    to: {
        baseName: "to",
        type: "number",
        required: true,
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=JobDefinitionFromRule.js.map