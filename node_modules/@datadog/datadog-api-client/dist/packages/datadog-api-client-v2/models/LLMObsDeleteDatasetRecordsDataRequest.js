"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMObsDeleteDatasetRecordsDataRequest = void 0;
/**
 * Data object for deleting records from an LLM Observability dataset.
 */
class LLMObsDeleteDatasetRecordsDataRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LLMObsDeleteDatasetRecordsDataRequest.attributeTypeMap;
    }
}
exports.LLMObsDeleteDatasetRecordsDataRequest = LLMObsDeleteDatasetRecordsDataRequest;
/**
 * @ignore
 */
LLMObsDeleteDatasetRecordsDataRequest.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "LLMObsDeleteDatasetRecordsDataAttributesRequest",
        required: true,
    },
    type: {
        baseName: "type",
        type: "LLMObsRecordType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LLMObsDeleteDatasetRecordsDataRequest.js.map