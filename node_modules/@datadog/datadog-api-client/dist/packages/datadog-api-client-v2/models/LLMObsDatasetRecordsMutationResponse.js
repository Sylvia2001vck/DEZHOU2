"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMObsDatasetRecordsMutationResponse = void 0;
/**
 * Response containing records after a create or update operation.
 */
class LLMObsDatasetRecordsMutationResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LLMObsDatasetRecordsMutationResponse.attributeTypeMap;
    }
}
exports.LLMObsDatasetRecordsMutationResponse = LLMObsDatasetRecordsMutationResponse;
/**
 * @ignore
 */
LLMObsDatasetRecordsMutationResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<LLMObsDatasetRecordsMutationData>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LLMObsDatasetRecordsMutationResponse.js.map