"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMObsDatasetRecordsUpdateRequest = void 0;
/**
 * Request to update records in an LLM Observability dataset.
 */
class LLMObsDatasetRecordsUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LLMObsDatasetRecordsUpdateRequest.attributeTypeMap;
    }
}
exports.LLMObsDatasetRecordsUpdateRequest = LLMObsDatasetRecordsUpdateRequest;
/**
 * @ignore
 */
LLMObsDatasetRecordsUpdateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "LLMObsDatasetRecordsUpdateDataRequest",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LLMObsDatasetRecordsUpdateRequest.js.map