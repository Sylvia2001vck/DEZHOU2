"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMObsDatasetResponse = void 0;
/**
 * Response containing a single LLM Observability dataset.
 */
class LLMObsDatasetResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LLMObsDatasetResponse.attributeTypeMap;
    }
}
exports.LLMObsDatasetResponse = LLMObsDatasetResponse;
/**
 * @ignore
 */
LLMObsDatasetResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "LLMObsDatasetDataResponse",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LLMObsDatasetResponse.js.map