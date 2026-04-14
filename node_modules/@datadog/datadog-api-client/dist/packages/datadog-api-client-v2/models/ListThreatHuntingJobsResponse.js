"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListThreatHuntingJobsResponse = void 0;
/**
 * List of threat hunting jobs.
 */
class ListThreatHuntingJobsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ListThreatHuntingJobsResponse.attributeTypeMap;
    }
}
exports.ListThreatHuntingJobsResponse = ListThreatHuntingJobsResponse;
/**
 * @ignore
 */
ListThreatHuntingJobsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<ThreatHuntingJobResponseData>",
    },
    meta: {
        baseName: "meta",
        type: "ThreatHuntingJobListMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ListThreatHuntingJobsResponse.js.map