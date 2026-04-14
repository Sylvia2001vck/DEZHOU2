"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringRuleQueryPayload = void 0;
/**
 * Payload to test a rule query with the expected result.
 */
class SecurityMonitoringRuleQueryPayload {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringRuleQueryPayload.attributeTypeMap;
    }
}
exports.SecurityMonitoringRuleQueryPayload = SecurityMonitoringRuleQueryPayload;
/**
 * @ignore
 */
SecurityMonitoringRuleQueryPayload.attributeTypeMap = {
    expectedResult: {
        baseName: "expectedResult",
        type: "boolean",
    },
    index: {
        baseName: "index",
        type: "number",
        format: "int64",
    },
    payload: {
        baseName: "payload",
        type: "SecurityMonitoringRuleQueryPayloadData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringRuleQueryPayload.js.map