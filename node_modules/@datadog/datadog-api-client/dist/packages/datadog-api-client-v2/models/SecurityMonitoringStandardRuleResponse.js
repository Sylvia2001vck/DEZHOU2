"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringStandardRuleResponse = void 0;
/**
 * Rule.
 */
class SecurityMonitoringStandardRuleResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringStandardRuleResponse.attributeTypeMap;
    }
}
exports.SecurityMonitoringStandardRuleResponse = SecurityMonitoringStandardRuleResponse;
/**
 * @ignore
 */
SecurityMonitoringStandardRuleResponse.attributeTypeMap = {
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
    createdAt: {
        baseName: "createdAt",
        type: "number",
        format: "int64",
    },
    creationAuthorId: {
        baseName: "creationAuthorId",
        type: "number",
        format: "int64",
    },
    customMessage: {
        baseName: "customMessage",
        type: "string",
    },
    customName: {
        baseName: "customName",
        type: "string",
    },
    defaultTags: {
        baseName: "defaultTags",
        type: "Array<string>",
    },
    deprecationDate: {
        baseName: "deprecationDate",
        type: "number",
        format: "int64",
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
    id: {
        baseName: "id",
        type: "string",
    },
    isDefault: {
        baseName: "isDefault",
        type: "boolean",
    },
    isDeleted: {
        baseName: "isDeleted",
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
        type: "Array<SecurityMonitoringStandardRuleQuery>",
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
    type: {
        baseName: "type",
        type: "SecurityMonitoringRuleTypeRead",
    },
    updateAuthorId: {
        baseName: "updateAuthorId",
        type: "number",
        format: "int64",
    },
    updatedAt: {
        baseName: "updatedAt",
        type: "number",
        format: "int64",
    },
    version: {
        baseName: "version",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringStandardRuleResponse.js.map