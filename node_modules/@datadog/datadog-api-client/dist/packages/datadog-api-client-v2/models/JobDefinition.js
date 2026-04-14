"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobDefinition = void 0;
/**
 * Definition of a threat hunting job.
 */
class JobDefinition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return JobDefinition.attributeTypeMap;
    }
}
exports.JobDefinition = JobDefinition;
/**
 * @ignore
 */
JobDefinition.attributeTypeMap = {
    calculatedFields: {
        baseName: "calculatedFields",
        type: "Array<CalculatedField>",
    },
    cases: {
        baseName: "cases",
        type: "Array<SecurityMonitoringRuleCaseCreate>",
        required: true,
    },
    from: {
        baseName: "from",
        type: "number",
        required: true,
        format: "int64",
    },
    groupSignalsBy: {
        baseName: "groupSignalsBy",
        type: "Array<string>",
    },
    index: {
        baseName: "index",
        type: "string",
        required: true,
    },
    message: {
        baseName: "message",
        type: "string",
        required: true,
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    options: {
        baseName: "options",
        type: "ThreatHuntingJobOptions",
    },
    queries: {
        baseName: "queries",
        type: "Array<ThreatHuntingJobQuery>",
        required: true,
    },
    referenceTables: {
        baseName: "referenceTables",
        type: "Array<SecurityMonitoringReferenceTable>",
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    thirdPartyCases: {
        baseName: "thirdPartyCases",
        type: "Array<SecurityMonitoringThirdPartyRuleCaseCreate>",
    },
    to: {
        baseName: "to",
        type: "number",
        required: true,
        format: "int64",
    },
    type: {
        baseName: "type",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=JobDefinition.js.map