"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreatHuntingJobOptions = void 0;
/**
 * Job options.
 */
class ThreatHuntingJobOptions {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ThreatHuntingJobOptions.attributeTypeMap;
    }
}
exports.ThreatHuntingJobOptions = ThreatHuntingJobOptions;
/**
 * @ignore
 */
ThreatHuntingJobOptions.attributeTypeMap = {
    anomalyDetectionOptions: {
        baseName: "anomalyDetectionOptions",
        type: "SecurityMonitoringRuleAnomalyDetectionOptions",
    },
    detectionMethod: {
        baseName: "detectionMethod",
        type: "SecurityMonitoringRuleDetectionMethod",
    },
    evaluationWindow: {
        baseName: "evaluationWindow",
        type: "SecurityMonitoringRuleEvaluationWindow",
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
//# sourceMappingURL=ThreatHuntingJobOptions.js.map