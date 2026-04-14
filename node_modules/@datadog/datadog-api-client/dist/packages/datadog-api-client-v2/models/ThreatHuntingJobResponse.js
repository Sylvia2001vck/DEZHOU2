"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreatHuntingJobResponse = void 0;
/**
 * Threat hunting job response.
 */
class ThreatHuntingJobResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ThreatHuntingJobResponse.attributeTypeMap;
    }
}
exports.ThreatHuntingJobResponse = ThreatHuntingJobResponse;
/**
 * @ignore
 */
ThreatHuntingJobResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "ThreatHuntingJobResponseData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ThreatHuntingJobResponse.js.map