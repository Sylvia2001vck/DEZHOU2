"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringRuleUpdatePayload = void 0;
/**
 * Update an existing rule.
 */
class SecurityMonitoringRuleUpdatePayload {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringRuleUpdatePayload.attributeTypeMap;
    }
}
exports.SecurityMonitoringRuleUpdatePayload = SecurityMonitoringRuleUpdatePayload;
/**
 * @ignore
 */
SecurityMonitoringRuleUpdatePayload.attributeTypeMap = {
    calculatedFields: {
        baseName: "calculatedFields",
        type: "Array<CalculatedField>",
    },
    cases: {
        baseName: "cases",
        type: "Array<SecurityMonitoringRuleCase>",
    },
    complianceSignalOptions: {
        baseName: "complianceSignalOptions",
        type: "CloudConfigurationRuleComplianceSignalOptions",
    },
    customMessage: {
        baseName: "customMessage",
        type: "string",
    },
    customName: {
        baseName: "customName",
        type: "string",
    },
    filters: {
        baseName: "filters",
        type: "Array<SecurityMonitoringFilter>",
    },
    groupSignalsBy: {
        baseName: "groupSignalsBy",
        type: "Array<string>",
    },
    hasExtendedTitle: {
        baseName: "hasExtendedTitle",
        type: "boolean",
    },
    isEnabled: {
        baseName: "isEnabled",
        type: "boolean",
    },
    message: {
        baseName: "message",
        type: "string",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    options: {
        baseName: "options",
        type: "SecurityMonitoringRuleOptions",
    },
    queries: {
        baseName: "queries",
        type: "Array<SecurityMonitoringRuleQuery>",
    },
    referenceTables: {
        baseName: "referenceTables",
        type: "Array<SecurityMonitoringReferenceTable>",
    },
    schedulingOptions: {
        baseName: "schedulingOptions",
        type: "SecurityMonitoringSchedulingOptions",
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    thirdPartyCases: {
        baseName: "thirdPartyCases",
        type: "Array<SecurityMonitoringThirdPartyRuleCase>",
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
//# sourceMappingURL=SecurityMonitoringRuleUpdatePayload.js.map