"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreatHuntingJobResponseData = void 0;
/**
 * Threat hunting job response data.
 */
class ThreatHuntingJobResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ThreatHuntingJobResponseData.attributeTypeMap;
    }
}
exports.ThreatHuntingJobResponseData = ThreatHuntingJobResponseData;
/**
 * @ignore
 */
ThreatHuntingJobResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ThreatHuntingJobResponseAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "ThreatHuntingJobDataType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ThreatHuntingJobResponseData.js.map