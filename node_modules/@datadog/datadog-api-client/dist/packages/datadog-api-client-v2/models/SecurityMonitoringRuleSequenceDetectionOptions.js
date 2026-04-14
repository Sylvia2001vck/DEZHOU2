"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringRuleSequenceDetectionOptions = void 0;
/**
 * Options on sequence detection method.
 */
class SecurityMonitoringRuleSequenceDetectionOptions {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringRuleSequenceDetectionOptions.attributeTypeMap;
    }
}
exports.SecurityMonitoringRuleSequenceDetectionOptions = SecurityMonitoringRuleSequenceDetectionOptions;
/**
 * @ignore
 */
SecurityMonitoringRuleSequenceDetectionOptions.attributeTypeMap = {
    stepTransitions: {
        baseName: "stepTransitions",
        type: "Array<SecurityMonitoringRuleSequenceDetectionStepTransition>",
    },
    steps: {
        baseName: "steps",
        type: "Array<SecurityMonitoringRuleSequenceDetectionStep>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringRuleSequenceDetectionOptions.js.map