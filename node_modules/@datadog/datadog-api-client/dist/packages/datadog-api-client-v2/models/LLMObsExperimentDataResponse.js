"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMObsExperimentDataResponse = void 0;
/**
 * Data object for an LLM Observability experiment.
 */
class LLMObsExperimentDataResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LLMObsExperimentDataResponse.attributeTypeMap;
    }
}
exports.LLMObsExperimentDataResponse = LLMObsExperimentDataResponse;
/**
 * @ignore
 */
LLMObsExperimentDataResponse.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "LLMObsExperimentDataAttributesResponse",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "LLMObsExperimentType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LLMObsExperimentDataResponse.js.map