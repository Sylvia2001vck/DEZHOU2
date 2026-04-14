"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuleAttributes = void 0;
/**
 * Details of a rule.
 */
class RuleAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RuleAttributes.attributeTypeMap;
    }
}
exports.RuleAttributes = RuleAttributes;
/**
 * @ignore
 */
RuleAttributes.attributeTypeMap = {
    category: {
        baseName: "category",
        type: "string",
    },
    createdAt: {
        baseName: "created_at",
        type: "Date",
        format: "date-time",
    },
    custom: {
        baseName: "custom",
        type: "boolean",
    },
    description: {
        baseName: "description",
        type: "string",
    },
    enabled: {
        baseName: "enabled",
        type: "boolean",
    },
    level: {
        baseName: "level",
        type: "number",
    },
    modifiedAt: {
        baseName: "modified_at",
        type: "Date",
        format: "date-time",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    owner: {
        baseName: "owner",
        type: "string",
    },
    scorecardName: {
        baseName: "scorecard_name",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RuleAttributes.js.map