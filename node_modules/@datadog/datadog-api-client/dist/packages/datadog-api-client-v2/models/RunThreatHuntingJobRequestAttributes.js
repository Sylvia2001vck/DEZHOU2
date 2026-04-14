"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RunThreatHuntingJobRequestAttributes = void 0;
/**
 * Run a threat hunting job request.
 */
class RunThreatHuntingJobRequestAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RunThreatHuntingJobRequestAttributes.attributeTypeMap;
    }
}
exports.RunThreatHuntingJobRequestAttributes = RunThreatHuntingJobRequestAttributes;
/**
 * @ignore
 */
RunThreatHuntingJobRequestAttributes.attributeTypeMap = {
    fromRule: {
        baseName: "fromRule",
        type: "JobDefinitionFromRule",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    jobDefinition: {
        baseName: "jobDefinition",
        type: "JobDefinition",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RunThreatHuntingJobRequestAttributes.js.map