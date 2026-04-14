"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMObsDatasetRecordDataResponse = void 0;
/**
 * A single LLM Observability dataset record.
 */
class LLMObsDatasetRecordDataResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LLMObsDatasetRecordDataResponse.attributeTypeMap;
    }
}
exports.LLMObsDatasetRecordDataResponse = LLMObsDatasetRecordDataResponse;
/**
 * @ignore
 */
LLMObsDatasetRecordDataResponse.attributeTypeMap = {
    createdAt: {
        baseName: "created_at",
        type: "Date",
        required: true,
        format: "date-time",
    },
    datasetId: {
        baseName: "dataset_id",
        type: "string",
        required: true,
    },
    expectedOutput: {
        baseName: "expected_output",
        type: "AnyValue",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    input: {
        baseName: "input",
        type: "AnyValue",
        required: true,
    },
    metadata: {
        baseName: "metadata",
        type: "{ [key: string]: any; }",
        required: true,
    },
    updatedAt: {
        baseName: "updated_at",
        type: "Date",
        required: true,
        format: "date-time",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LLMObsDatasetRecordDataResponse.js.map