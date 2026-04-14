"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringRuleOptions = void 0;
/**
 * Options.
 */
class SecurityMonitoringRuleOptions {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringRuleOptions.attributeTypeMap;
    }
}
exports.SecurityMonitoringRuleOptions = SecurityMonitoringRuleOptions;
/**
 * @ignore
 */
SecurityMonitoringRuleOptions.attributeTypeMap = {
    anomalyDetectionOptions: {
        baseName: "anomalyDetectionOptions",
        type: "SecurityMonitoringRuleAnomalyDetectionOptions",
    },
    complianceRuleOptions: {
        baseName: "complianceRuleOptions",
        type: "CloudConfigurationComplianceRuleOptions",
    },
    decreaseCriticalityBasedOnEnv: {
        baseName: "decreaseCriticalityBasedOnEnv",
        type: "boolean",
    },
    detectionMethod: {
        baseName: "detectionMethod",
        type: "SecurityMonitoringRuleDetectionMethod",
    },
    evaluationWindow: {
        baseName: "evaluationWindow",
        type: "SecurityMonitoringRuleEvaluationWindow",
    },
    hardcodedEvaluatorType: {
        baseName: "hardcodedEvaluatorType",
        type: "SecurityMonitoringRuleHardcodedEvaluatorType",
    },
    impossibleTravelOptions: {
        baseName: "impossibleTravelOptions",
        type: "SecurityMonitoringRuleImpossibleTravelOptions",
    },
    keepAlive: {
        baseName: "keepAlive",
        type: "SecurityMonitoringRuleKeepAlive",
    },
    maxSignalDuration: {
        baseName: "maxSignalDuration",
        type: "SecurityMonitoringRuleMaxSignalDuration",
    },
    newValueOptions: {
        baseName: "newValueOptions",
        type: "SecurityMonitoringRuleNewValueOptions",
    },
    sequenceDetectionOptions: {
        baseName: "sequenceDetectionOptions",
        type: "SecurityMonitoringRuleSequenceDetectionOptions",
    },
    thirdPartyRuleOptions: {
        baseName: "thirdPartyRuleOptions",
        type: "SecurityMonitoringRuleThirdPartyOptions",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringRuleOptions.js.map