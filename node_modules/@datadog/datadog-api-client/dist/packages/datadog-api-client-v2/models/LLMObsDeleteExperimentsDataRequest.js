"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMObsDeleteExperimentsDataRequest = void 0;
/**
 * Data object for deleting LLM Observability experiments.
 */
class LLMObsDeleteExperimentsDataRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LLMObsDeleteExperimentsDataRequest.attributeTypeMap;
    }
}
exports.LLMObsDeleteExperimentsDataRequest = LLMObsDeleteExperimentsDataRequest;
/**
 * @ignore
 */
LLMObsDeleteExperimentsDataRequest.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "LLMObsDeleteExperimentsDataAttributesRequest",
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
//# sourceMappingURL=LLMObsDeleteExperimentsDataRequest.js.map