"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringRuleCaseActionOptions = void 0;
/**
 * Options for the rule action
 */
class SecurityMonitoringRuleCaseActionOptions {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringRuleCaseActionOptions.attributeTypeMap;
    }
}
exports.SecurityMonitoringRuleCaseActionOptions = SecurityMonitoringRuleCaseActionOptions;
/**
 * @ignore
 */
SecurityMonitoringRuleCaseActionOptions.attributeTypeMap = {
    duration: {
        baseName: "duration",
        type: "number",
        format: "int64",
    },
    flaggedIpType: {
        baseName: "flaggedIPType",
        type: "SecurityMonitoringRuleCaseActionOptionsFlaggedIPType",
    },
    userBehaviorName: {
        baseName: "userBehaviorName",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringRuleCaseActionOptions.js.map