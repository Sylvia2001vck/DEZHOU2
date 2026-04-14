"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringRuleSequenceDetectionStep = void 0;
/**
 * Step definition for sequence detection containing the step name, condition, and evaluation window.
 */
class SecurityMonitoringRuleSequenceDetectionStep {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringRuleSequenceDetectionStep.attributeTypeMap;
    }
}
exports.SecurityMonitoringRuleSequenceDetectionStep = SecurityMonitoringRuleSequenceDetectionStep;
/**
 * @ignore
 */
SecurityMonitoringRuleSequenceDetectionStep.attributeTypeMap = {
    condition: {
        baseName: "condition",
        type: "string",
    },
    evaluationWindow: {
        baseName: "evaluationWindow",
        type: "SecurityMonitoringRuleEvaluationWindow",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringRuleSequenceDetectionStep.js.map