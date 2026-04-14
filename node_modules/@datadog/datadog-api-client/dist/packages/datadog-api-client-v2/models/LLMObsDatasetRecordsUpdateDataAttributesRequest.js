"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMObsDatasetRecordsUpdateDataAttributesRequest = void 0;
/**
 * Attributes for updating records in an LLM Observability dataset.
 */
class LLMObsDatasetRecordsUpdateDataAttributesRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LLMObsDatasetRecordsUpdateDataAttributesRequest.attributeTypeMap;
    }
}
exports.LLMObsDatasetRecordsUpdateDataAttributesRequest = LLMObsDatasetRecordsUpdateDataAttributesRequest;
/**
 * @ignore
 */
LLMObsDatasetRecordsUpdateDataAttributesRequest.attributeTypeMap = {
    records: {
        baseName: "records",
        type: "Array<LLMObsDatasetRecordUpdateItem>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LLMObsDatasetRecordsUpdateDataAttributesRequest.js.map