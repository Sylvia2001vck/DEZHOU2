"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMObsDeleteDatasetRecordsRequest = void 0;
/**
 * Request to delete records from an LLM Observability dataset.
 */
class LLMObsDeleteDatasetRecordsRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LLMObsDeleteDatasetRecordsRequest.attributeTypeMap;
    }
}
exports.LLMObsDeleteDatasetRecordsRequest = LLMObsDeleteDatasetRecordsRequest;
/**
 * @ignore
 */
LLMObsDeleteDatasetRecordsRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "LLMObsDeleteDatasetRecordsDataRequest",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LLMObsDeleteDatasetRecordsRequest.js.map