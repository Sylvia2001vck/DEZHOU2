"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringRuleCase = void 0;
/**
 * Case when signal is generated.
 */
class SecurityMonitoringRuleCase {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringRuleCase.attributeTypeMap;
    }
}
exports.SecurityMonitoringRuleCase = SecurityMonitoringRuleCase;
/**
 * @ignore
 */
SecurityMonitoringRuleCase.attributeTypeMap = {
    actions: {
        baseName: "actions",
        type: "Array<SecurityMonitoringRuleCaseAction>",
    },
    condition: {
        baseName: "condition",
        type: "string",
    },
    customStatus: {
        baseName: "customStatus",
        type: "SecurityMonitoringRuleSeverity",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    notifications: {
        baseName: "notifications",
        type: "Array<string>",
    },
    status: {
        baseName: "status",
        type: "SecurityMonitoringRuleSeverity",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringRuleCase.js.map