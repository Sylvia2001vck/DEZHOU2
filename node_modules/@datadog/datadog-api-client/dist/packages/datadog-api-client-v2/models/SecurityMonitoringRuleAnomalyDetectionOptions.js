"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringRuleAnomalyDetectionOptions = void 0;
/**
 * Options on anomaly detection method.
 */
class SecurityMonitoringRuleAnomalyDetectionOptions {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringRuleAnomalyDetectionOptions.attributeTypeMap;
    }
}
exports.SecurityMonitoringRuleAnomalyDetectionOptions = SecurityMonitoringRuleAnomalyDetectionOptions;
/**
 * @ignore
 */
SecurityMonitoringRuleAnomalyDetectionOptions.attributeTypeMap = {
    bucketDuration: {
        baseName: "bucketDuration",
        type: "SecurityMonitoringRuleAnomalyDetectionOptionsBucketDuration",
    },
    detectionTolerance: {
        baseName: "detectionTolerance",
        type: "SecurityMonitoringRuleAnomalyDetectionOptionsDetectionTolerance",
    },
    instantaneousBaseline: {
        baseName: "instantaneousBaseline",
        type: "boolean",
    },
    learningDuration: {
        baseName: "learningDuration",
        type: "SecurityMonitoringRuleAnomalyDetectionOptionsLearningDuration",
    },
    learningPeriodBaseline: {
        baseName: "learningPeriodBaseline",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringRuleAnomalyDetectionOptions.js.map