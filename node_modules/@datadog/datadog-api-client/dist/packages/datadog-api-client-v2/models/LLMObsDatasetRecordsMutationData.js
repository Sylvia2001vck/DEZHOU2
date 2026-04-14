"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMObsDatasetRecordsMutationData = void 0;
/**
 * Response containing records after a create or update operation.
 */
class LLMObsDatasetRecordsMutationData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LLMObsDatasetRecordsMutationData.attributeTypeMap;
    }
}
exports.LLMObsDatasetRecordsMutationData = LLMObsDatasetRecordsMutationData;
/**
 * @ignore
 */
LLMObsDatasetRecordsMutationData.attributeTypeMap = {
    records: {
        baseName: "records",
        type: "Array<LLMObsDatasetRecordDataResponse>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LLMObsDatasetRecordsMutationData.js.map