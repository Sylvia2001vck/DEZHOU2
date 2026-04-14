"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringRuleSequenceDetectionStepTransition = void 0;
/**
 * Transition from a parent step to a child step within a sequence detection rule.
 */
class SecurityMonitoringRuleSequenceDetectionStepTransition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringRuleSequenceDetectionStepTransition.attributeTypeMap;
    }
}
exports.SecurityMonitoringRuleSequenceDetectionStepTransition = SecurityMonitoringRuleSequenceDetectionStepTransition;
/**
 * @ignore
 */
SecurityMonitoringRuleSequenceDetectionStepTransition.attributeTypeMap = {
    child: {
        baseName: "child",
        type: "string",
    },
    evaluationWindow: {
        baseName: "evaluationWindow",
        type: "SecurityMonitoringRuleEvaluationWindow",
    },
    parent: {
        baseName: "parent",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringRuleSequenceDetectionStepTransition.js.map