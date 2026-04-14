"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMObsDeleteExperimentsRequest = void 0;
/**
 * Request to delete one or more LLM Observability experiments.
 */
class LLMObsDeleteExperimentsRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LLMObsDeleteExperimentsRequest.attributeTypeMap;
    }
}
exports.LLMObsDeleteExperimentsRequest = LLMObsDeleteExperimentsRequest;
/**
 * @ignore
 */
LLMObsDeleteExperimentsRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "LLMObsDeleteExperimentsDataRequest",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LLMObsDeleteExperimentsRequest.js.map