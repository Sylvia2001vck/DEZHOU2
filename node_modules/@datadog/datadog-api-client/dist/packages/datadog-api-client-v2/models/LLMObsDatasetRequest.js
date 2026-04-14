"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMObsDatasetRequest = void 0;
/**
 * Request to create an LLM Observability dataset.
 */
class LLMObsDatasetRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LLMObsDatasetRequest.attributeTypeMap;
    }
}
exports.LLMObsDatasetRequest = LLMObsDatasetRequest;
/**
 * @ignore
 */
LLMObsDatasetRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "LLMObsDatasetDataRequest",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LLMObsDatasetRequest.js.map