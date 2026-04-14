"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMObsDatasetRecordsUpdateDataRequest = void 0;
/**
 * Data object for updating records in an LLM Observability dataset.
 */
class LLMObsDatasetRecordsUpdateDataRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LLMObsDatasetRecordsUpdateDataRequest.attributeTypeMap;
    }
}
exports.LLMObsDatasetRecordsUpdateDataRequest = LLMObsDatasetRecordsUpdateDataRequest;
/**
 * @ignore
 */
LLMObsDatasetRecordsUpdateDataRequest.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "LLMObsDatasetRecordsUpdateDataAttributesRequest",
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
//# sourceMappingURL=LLMObsDatasetRecordsUpdateDataRequest.js.map