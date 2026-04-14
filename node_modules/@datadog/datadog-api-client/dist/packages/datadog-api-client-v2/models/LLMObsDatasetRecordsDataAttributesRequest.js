"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMObsDatasetRecordsDataAttributesRequest = void 0;
/**
 * Attributes for appending records to an LLM Observability dataset.
 */
class LLMObsDatasetRecordsDataAttributesRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LLMObsDatasetRecordsDataAttributesRequest.attributeTypeMap;
    }
}
exports.LLMObsDatasetRecordsDataAttributesRequest = LLMObsDatasetRecordsDataAttributesRequest;
/**
 * @ignore
 */
LLMObsDatasetRecordsDataAttributesRequest.attributeTypeMap = {
    deduplicate: {
        baseName: "deduplicate",
        type: "boolean",
    },
    records: {
        baseName: "records",
        type: "Array<LLMObsDatasetRecordItem>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LLMObsDatasetRecordsDataAttributesRequest.js.map