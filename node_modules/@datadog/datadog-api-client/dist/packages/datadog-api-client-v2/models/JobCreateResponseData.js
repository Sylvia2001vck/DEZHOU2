"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobCreateResponseData = void 0;
/**
 * The definition of `JobCreateResponseData` object.
 */
class JobCreateResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return JobCreateResponseData.attributeTypeMap;
    }
}
exports.JobCreateResponseData = JobCreateResponseData;
/**
 * @ignore
 */
JobCreateResponseData.attributeTypeMap = {
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
//# sourceMappingURL=JobCreateResponseData.js.map