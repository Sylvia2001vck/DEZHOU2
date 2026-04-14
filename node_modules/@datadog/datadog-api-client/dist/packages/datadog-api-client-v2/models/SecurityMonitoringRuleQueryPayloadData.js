"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringRuleQueryPayloadData = void 0;
/**
 * Payload used to test the rule query.
 */
class SecurityMonitoringRuleQueryPayloadData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringRuleQueryPayloadData.attributeTypeMap;
    }
}
exports.SecurityMonitoringRuleQueryPayloadData = SecurityMonitoringRuleQueryPayloadData;
/**
 * @ignore
 */
SecurityMonitoringRuleQueryPayloadData.attributeTypeMap = {
    ddsource: {
        baseName: "ddsource",
        type: "string",
    },
    ddtags: {
        baseName: "ddtags",
        type: "string",
    },
    hostname: {
        baseName: "hostname",
        type: "string",
    },
    message: {
        baseName: "message",
        type: "string",
    },
    service: {
        baseName: "service",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringRuleQueryPayloadData.js.map