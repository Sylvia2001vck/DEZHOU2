"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringSuppressionCreateAttributes = void 0;
/**
 * Object containing the attributes of the suppression rule to be created.
 */
class SecurityMonitoringSuppressionCreateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringSuppressionCreateAttributes.attributeTypeMap;
    }
}
exports.SecurityMonitoringSuppressionCreateAttributes = SecurityMonitoringSuppressionCreateAttributes;
/**
 * @ignore
 */
SecurityMonitoringSuppressionCreateAttributes.attributeTypeMap = {
    dataExclusionQuery: {
        baseName: "data_exclusion_query",
        type: "string",
    },
    description: {
        baseName: "description",
        type: "string",
    },
    enabled: {
        baseName: "enabled",
        type: "boolean",
        required: true,
    },
    expirationDate: {
        baseName: "expiration_date",
        type: "number",
        format: "int64",
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    ruleQuery: {
        baseName: "rule_query",
        type: "string",
        required: true,
    },
    startDate: {
        baseName: "start_date",
        type: "number",
        format: "int64",
    },
    suppressionQuery: {
        baseName: "suppression_query",
        type: "string",
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringSuppressionCreateAttributes.js.map