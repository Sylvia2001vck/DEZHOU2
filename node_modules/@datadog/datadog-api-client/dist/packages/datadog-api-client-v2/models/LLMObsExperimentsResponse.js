"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMObsExperimentsResponse = void 0;
/**
 * Response containing a list of LLM Observability experiments.
 */
class LLMObsExperimentsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LLMObsExperimentsResponse.attributeTypeMap;
    }
}
exports.LLMObsExperimentsResponse = LLMObsExperimentsResponse;
/**
 * @ignore
 */
LLMObsExperimentsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<LLMObsExperimentDataResponse>",
        required: true,
    },
    meta: {
        baseName: "meta",
        type: "LLMObsCursorMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LLMObsExperimentsResponse.js.map