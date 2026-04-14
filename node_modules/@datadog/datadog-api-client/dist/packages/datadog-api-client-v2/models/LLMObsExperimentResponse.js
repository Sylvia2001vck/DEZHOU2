"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMObsExperimentResponse = void 0;
/**
 * Response containing a single LLM Observability experiment.
 */
class LLMObsExperimentResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LLMObsExperimentResponse.attributeTypeMap;
    }
}
exports.LLMObsExperimentResponse = LLMObsExperimentResponse;
/**
 * @ignore
 */
LLMObsExperimentResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "LLMObsExperimentDataResponse",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LLMObsExperimentResponse.js.map