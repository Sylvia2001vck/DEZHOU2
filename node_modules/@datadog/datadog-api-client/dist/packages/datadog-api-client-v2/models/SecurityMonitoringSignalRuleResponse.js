"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringSignalRuleResponse = void 0;
/**
 * Rule.
 */
class SecurityMonitoringSignalRuleResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringSignalRuleResponse.attributeTypeMap;
    }
}
exports.SecurityMonitoringSignalRuleResponse = SecurityMonitoringSignalRuleResponse;
/**
 * @ignore
 */
SecurityMonitoringSignalRuleResponse.attributeTypeMap = {
    cases: {
        baseName: "cases",
        type: "Array<SecurityMonitoringRuleCase>",
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
    deprecationDate: {
        baseName: "deprecationDate",
        type: "number",
        format: "int64",
    },
    filters: {
        baseName: "filters",
        type: "Array<SecurityMonitoringFilter>",
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
        type: "Array<SecurityMonitoringSignalRuleResponseQuery>",
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    type: {
        baseName: "type",
        type: "SecurityMonitoringSignalRuleType",
    },
    updateAuthorId: {
        baseName: "updateAuthorId",
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
//# sourceMappingURL=SecurityMonitoringSignalRuleResponse.js.map