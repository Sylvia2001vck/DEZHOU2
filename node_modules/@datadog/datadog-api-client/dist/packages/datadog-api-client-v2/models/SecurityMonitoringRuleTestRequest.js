"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringRuleTestRequest = void 0;
/**
 * Test the rule queries of a rule (rule property is ignored when applied to an existing rule)
 */
class SecurityMonitoringRuleTestRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringRuleTestRequest.attributeTypeMap;
    }
}
exports.SecurityMonitoringRuleTestRequest = SecurityMonitoringRuleTestRequest;
/**
 * @ignore
 */
SecurityMonitoringRuleTestRequest.attributeTypeMap = {
    rule: {
        baseName: "rule",
        type: "SecurityMonitoringRuleTestPayload",
    },
    ruleQueryPayloads: {
        baseName: "ruleQueryPayloads",
        type: "Array<SecurityMonitoringRuleQueryPayload>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringRuleTestRequest.js.map