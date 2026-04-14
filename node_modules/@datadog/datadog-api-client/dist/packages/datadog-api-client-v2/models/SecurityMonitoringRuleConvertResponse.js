"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringRuleConvertResponse = void 0;
/**
 * Result of the convert rule request containing Terraform content.
 */
class SecurityMonitoringRuleConvertResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringRuleConvertResponse.attributeTypeMap;
    }
}
exports.SecurityMonitoringRuleConvertResponse = SecurityMonitoringRuleConvertResponse;
/**
 * @ignore
 */
SecurityMonitoringRuleConvertResponse.attributeTypeMap = {
    ruleId: {
        baseName: "ruleId",
        type: "string",
    },
    terraformContent: {
        baseName: "terraformContent",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringRuleConvertResponse.js.map