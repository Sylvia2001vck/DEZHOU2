"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreatHuntingJobResponseAttributes = void 0;
/**
 * Threat hunting job attributes.
 */
class ThreatHuntingJobResponseAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ThreatHuntingJobResponseAttributes.attributeTypeMap;
    }
}
exports.ThreatHuntingJobResponseAttributes = ThreatHuntingJobResponseAttributes;
/**
 * @ignore
 */
ThreatHuntingJobResponseAttributes.attributeTypeMap = {
    createdAt: {
        baseName: "createdAt",
        type: "string",
    },
    createdByHandle: {
        baseName: "createdByHandle",
        type: "string",
    },
    createdByName: {
        baseName: "createdByName",
        type: "string",
    },
    createdFromRuleId: {
        baseName: "createdFromRuleId",
        type: "string",
    },
    jobDefinition: {
        baseName: "jobDefinition",
        type: "JobDefinition",
    },
    jobName: {
        baseName: "jobName",
        type: "string",
    },
    jobStatus: {
        baseName: "jobStatus",
        type: "string",
    },
    modifiedAt: {
        baseName: "modifiedAt",
        type: "string",
    },
    signalOutput: {
        baseName: "signalOutput",
        type: "boolean",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ThreatHuntingJobResponseAttributes.js.map