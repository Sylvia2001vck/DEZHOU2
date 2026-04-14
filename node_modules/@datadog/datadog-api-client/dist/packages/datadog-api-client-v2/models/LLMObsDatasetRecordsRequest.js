"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMObsDatasetRecordsRequest = void 0;
/**
 * Request to append records to an LLM Observability dataset.
 */
class LLMObsDatasetRecordsRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LLMObsDatasetRecordsRequest.attributeTypeMap;
    }
}
exports.LLMObsDatasetRecordsRequest = LLMObsDatasetRecordsRequest;
/**
 * @ignore
 */
LLMObsDatasetRecordsRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "LLMObsDatasetRecordsDataRequest",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LLMObsDatasetRecordsRequest.js.map