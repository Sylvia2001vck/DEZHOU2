"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMObsDatasetRecordsDataRequest = void 0;
/**
 * Data object for appending records to an LLM Observability dataset.
 */
class LLMObsDatasetRecordsDataRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LLMObsDatasetRecordsDataRequest.attributeTypeMap;
    }
}
exports.LLMObsDatasetRecordsDataRequest = LLMObsDatasetRecordsDataRequest;
/**
 * @ignore
 */
LLMObsDatasetRecordsDataRequest.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "LLMObsDatasetRecordsDataAttributesRequest",
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
//# sourceMappingURL=LLMObsDatasetRecordsDataRequest.js.map