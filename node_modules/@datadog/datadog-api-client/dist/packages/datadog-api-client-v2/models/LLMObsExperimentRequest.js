"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMObsExperimentRequest = void 0;
/**
 * Request to create an LLM Observability experiment.
 */
class LLMObsExperimentRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LLMObsExperimentRequest.attributeTypeMap;
    }
}
exports.LLMObsExperimentRequest = LLMObsExperimentRequest;
/**
 * @ignore
 */
LLMObsExperimentRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "LLMObsExperimentDataRequest",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LLMObsExperimentRequest.js.map