"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMObsExperimentDataRequest = void 0;
/**
 * Data object for creating an LLM Observability experiment.
 */
class LLMObsExperimentDataRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LLMObsExperimentDataRequest.attributeTypeMap;
    }
}
exports.LLMObsExperimentDataRequest = LLMObsExperimentDataRequest;
/**
 * @ignore
 */
LLMObsExperimentDataRequest.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "LLMObsExperimentDataAttributesRequest",
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
//# sourceMappingURL=LLMObsExperimentDataRequest.js.map