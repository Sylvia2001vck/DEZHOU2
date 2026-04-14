"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMObsDeleteDatasetRecordsDataAttributesRequest = void 0;
/**
 * Attributes for deleting records from an LLM Observability dataset.
 */
class LLMObsDeleteDatasetRecordsDataAttributesRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LLMObsDeleteDatasetRecordsDataAttributesRequest.attributeTypeMap;
    }
}
exports.LLMObsDeleteDatasetRecordsDataAttributesRequest = LLMObsDeleteDatasetRecordsDataAttributesRequest;
/**
 * @ignore
 */
LLMObsDeleteDatasetRecordsDataAttributesRequest.attributeTypeMap = {
    recordIds: {
        baseName: "record_ids",
        type: "Array<string>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LLMObsDeleteDatasetRecordsDataAttributesRequest.js.map