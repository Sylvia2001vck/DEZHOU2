"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobCreateResponse = void 0;
/**
 * Run a threat hunting job response.
 */
class JobCreateResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return JobCreateResponse.attributeTypeMap;
    }
}
exports.JobCreateResponse = JobCreateResponse;
/**
 * @ignore
 */
JobCreateResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "JobCreateResponseData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=JobCreateResponse.js.map