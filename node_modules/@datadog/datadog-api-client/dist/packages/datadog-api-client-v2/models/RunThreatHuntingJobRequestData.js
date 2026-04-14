"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RunThreatHuntingJobRequestData = void 0;
/**
 * Data for running a threat hunting job request.
 */
class RunThreatHuntingJobRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RunThreatHuntingJobRequestData.attributeTypeMap;
    }
}
exports.RunThreatHuntingJobRequestData = RunThreatHuntingJobRequestData;
/**
 * @ignore
 */
RunThreatHuntingJobRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "RunThreatHuntingJobRequestAttributes",
    },
    type: {
        baseName: "type",
        type: "RunThreatHuntingJobRequestDataType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RunThreatHuntingJobRequestData.js.map