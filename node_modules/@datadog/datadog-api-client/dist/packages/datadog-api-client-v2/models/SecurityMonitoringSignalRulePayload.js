"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringSignalRulePayload = void 0;
/**
 * The payload of a signal correlation rule.
 */
class SecurityMonitoringSignalRulePayload {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringSignalRulePayload.attributeTypeMap;
    }
}
exports.SecurityMonitoringSignalRulePayload = SecurityMonitoringSignalRulePayload;
/**
 * @ignore
 */
SecurityMonitoringSignalRulePayload.attributeTypeMap = {
    cases: {
        baseName: "cases",
        type: "Array<SecurityMonitoringRuleCaseCreate>",
        required: true,
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
//# sourceMappingURL=SecurityMonitoringSignalRulePayload.js.map