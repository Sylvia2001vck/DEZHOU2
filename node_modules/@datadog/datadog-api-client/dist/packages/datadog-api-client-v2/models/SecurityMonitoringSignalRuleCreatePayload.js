"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringSignalRuleCreatePayload = void 0;
/**
 * Create a new signal correlation rule.
 */
class SecurityMonitoringSignalRuleCreatePayload {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringSignalRuleCreatePayload.attributeTypeMap;
    }
}
exports.SecurityMonitoringSignalRuleCreatePayload = SecurityMonitoringSignalRuleCreatePayload;
/**
 * @ignore
 */
SecurityMonitoringSignalRuleCreatePayload.attributeTypeMap = {
    cases: {
        baseName: "cases",
        type: "Array<SecurityMonitoringRuleCaseCreate>",
        required: true,
    },
    filters: {
        baseName: "filters",
        type: "Array<SecurityMonitoringFilter>",
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
        type: "Array<SecurityMonitoringSignalRuleQuery>",
        required: true,
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    type: {
        baseName: "type",
        type: "SecurityMonitoringSignalRuleType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringSignalRuleCreatePayload.js.map