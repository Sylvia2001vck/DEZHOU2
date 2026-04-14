"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RunThreatHuntingJobRequest = void 0;
/**
 * Run a threat hunting job request.
 */
class RunThreatHuntingJobRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RunThreatHuntingJobRequest.attributeTypeMap;
    }
}
exports.RunThreatHuntingJobRequest = RunThreatHuntingJobRequest;
/**
 * @ignore
 */
RunThreatHuntingJobRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "RunThreatHuntingJobRequestData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RunThreatHuntingJobRequest.js.map