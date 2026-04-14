"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMObsExperimentUpdateDataRequest = void 0;
/**
 * Data object for updating an LLM Observability experiment.
 */
class LLMObsExperimentUpdateDataRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LLMObsExperimentUpdateDataRequest.attributeTypeMap;
    }
}
exports.LLMObsExperimentUpdateDataRequest = LLMObsExperimentUpdateDataRequest;
/**
 * @ignore
 */
LLMObsExperimentUpdateDataRequest.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "LLMObsExperimentUpdateDataAttributesRequest",
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
//# sourceMappingURL=LLMObsExperimentUpdateDataRequest.js.map