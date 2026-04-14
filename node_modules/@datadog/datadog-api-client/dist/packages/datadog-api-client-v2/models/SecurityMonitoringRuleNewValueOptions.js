"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringRuleNewValueOptions = void 0;
/**
 * Options on new value detection method.
 */
class SecurityMonitoringRuleNewValueOptions {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringRuleNewValueOptions.attributeTypeMap;
    }
}
exports.SecurityMonitoringRuleNewValueOptions = SecurityMonitoringRuleNewValueOptions;
/**
 * @ignore
 */
SecurityMonitoringRuleNewValueOptions.attributeTypeMap = {
    forgetAfter: {
        baseName: "forgetAfter",
        type: "SecurityMonitoringRuleNewValueOptionsForgetAfter",
    },
    instantaneousBaseline: {
        baseName: "instantaneousBaseline",
        type: "boolean",
    },
    learningDuration: {
        baseName: "learningDuration",
        type: "SecurityMonitoringRuleNewValueOptionsLearningDuration",
    },
    learningMethod: {
        baseName: "learningMethod",
        type: "SecurityMonitoringRuleNewValueOptionsLearningMethod",
    },
    learningThreshold: {
        baseName: "learningThreshold",
        type: "SecurityMonitoringRuleNewValueOptionsLearningThreshold",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringRuleNewValueOptions.js.map