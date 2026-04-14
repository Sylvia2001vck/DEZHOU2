"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMObsDatasetUpdateRequest = void 0;
/**
 * Request to partially update an LLM Observability dataset.
 */
class LLMObsDatasetUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LLMObsDatasetUpdateRequest.attributeTypeMap;
    }
}
exports.LLMObsDatasetUpdateRequest = LLMObsDatasetUpdateRequest;
/**
 * @ignore
 */
LLMObsDatasetUpdateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "LLMObsDatasetUpdateDataRequest",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LLMObsDatasetUpdateRequest.js.map