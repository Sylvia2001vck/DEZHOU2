"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMObsDatasetRecordsListResponse = void 0;
/**
 * Response containing a paginated list of LLM Observability dataset records.
 */
class LLMObsDatasetRecordsListResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LLMObsDatasetRecordsListResponse.attributeTypeMap;
    }
}
exports.LLMObsDatasetRecordsListResponse = LLMObsDatasetRecordsListResponse;
/**
 * @ignore
 */
LLMObsDatasetRecordsListResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<LLMObsDatasetRecordDataResponse>",
        required: true,
    },
    meta: {
        baseName: "meta",
        type: "LLMObsCursorMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LLMObsDatasetRecordsListResponse.js.map