"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMObsExperimentUpdateRequest = void 0;
/**
 * Request to partially update an LLM Observability experiment.
 */
class LLMObsExperimentUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LLMObsExperimentUpdateRequest.attributeTypeMap;
    }
}
exports.LLMObsExperimentUpdateRequest = LLMObsExperimentUpdateRequest;
/**
 * @ignore
 */
LLMObsExperimentUpdateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "LLMObsExperimentUpdateDataRequest",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LLMObsExperimentUpdateRequest.js.map