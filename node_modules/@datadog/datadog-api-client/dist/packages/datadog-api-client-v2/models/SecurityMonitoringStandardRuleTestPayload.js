"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringStandardRuleTestPayload = void 0;
/**
 * The payload of a rule to test
 */
class SecurityMonitoringStandardRuleTestPayload {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringStandardRuleTestPayload.attributeTypeMap;
    }
}
exports.SecurityMonitoringStandardRuleTestPayload = SecurityMonitoringStandardRuleTestPayload;
/**
 * @ignore
 */
SecurityMonitoringStandardRuleTestPayload.attributeTypeMap = {
    calculatedFields: {
        baseName: "calculatedFields",
        type: "Array<CalculatedField>",
    },
    cases: {
        baseName: "cases",
        type: "Array<SecurityMonitoringRuleCaseCreate>",
        required: true,
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
        required: true,
    },
    message: {
        baseName: "message",
        type: "string",
        required: true,
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    options: {
        baseName: "options",
        type: "SecurityMonitoringRuleOptions",
        required: true,
    },
    queries: {
        baseName: "queries",
        type: "Array<SecurityMonitoringStandardRuleQuery>",
        required: true,
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
        type: "Array<SecurityMonitoringThirdPartyRuleCaseCreate>",
    },
    type: {
        baseName: "type",
        type: "SecurityMonitoringRuleTypeTest",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringStandardRuleTestPayload.js.map