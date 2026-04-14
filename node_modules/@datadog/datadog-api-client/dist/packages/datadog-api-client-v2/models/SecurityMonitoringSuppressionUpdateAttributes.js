"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringSuppressionUpdateAttributes = void 0;
/**
 * The suppression rule properties to be updated.
 */
class SecurityMonitoringSuppressionUpdateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringSuppressionUpdateAttributes.attributeTypeMap;
    }
}
exports.SecurityMonitoringSuppressionUpdateAttributes = SecurityMonitoringSuppressionUpdateAttributes;
/**
 * @ignore
 */
SecurityMonitoringSuppressionUpdateAttributes.attributeTypeMap = {
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
    },
    expirationDate: {
        baseName: "expiration_date",
        type: "number",
        format: "int64",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    ruleQuery: {
        baseName: "rule_query",
        type: "string",
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
    version: {
        baseName: "version",
        type: "number",
        format: "int32",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringSuppressionUpdateAttributes.js.map