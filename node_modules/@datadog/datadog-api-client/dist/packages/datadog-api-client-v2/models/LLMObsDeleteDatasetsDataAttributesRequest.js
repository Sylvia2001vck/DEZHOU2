"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMObsDeleteDatasetsDataAttributesRequest = void 0;
/**
 * Attributes for deleting LLM Observability datasets.
 */
class LLMObsDeleteDatasetsDataAttributesRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LLMObsDeleteDatasetsDataAttributesRequest.attributeTypeMap;
    }
}
exports.LLMObsDeleteDatasetsDataAttributesRequest = LLMObsDeleteDatasetsDataAttributesRequest;
/**
 * @ignore
 */
LLMObsDeleteDatasetsDataAttributesRequest.attributeTypeMap = {
    datasetIds: {
        baseName: "dataset_ids",
        type: "Array<string>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LLMObsDeleteDatasetsDataAttributesRequest.js.map