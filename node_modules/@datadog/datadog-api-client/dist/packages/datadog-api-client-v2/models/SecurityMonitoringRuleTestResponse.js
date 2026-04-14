"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringRuleTestResponse = void 0;
/**
 * Result of the test of the rule queries.
 */
class SecurityMonitoringRuleTestResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringRuleTestResponse.attributeTypeMap;
    }
}
exports.SecurityMonitoringRuleTestResponse = SecurityMonitoringRuleTestResponse;
/**
 * @ignore
 */
SecurityMonitoringRuleTestResponse.attributeTypeMap = {
    results: {
        baseName: "results",
        type: "Array<boolean>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringRuleTestResponse.js.map