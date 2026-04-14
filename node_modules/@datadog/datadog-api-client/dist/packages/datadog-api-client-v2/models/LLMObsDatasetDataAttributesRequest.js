"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMObsDatasetDataAttributesRequest = void 0;
/**
 * Attributes for creating an LLM Observability dataset.
 */
class LLMObsDatasetDataAttributesRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LLMObsDatasetDataAttributesRequest.attributeTypeMap;
    }
}
exports.LLMObsDatasetDataAttributesRequest = LLMObsDatasetDataAttributesRequest;
/**
 * @ignore
 */
LLMObsDatasetDataAttributesRequest.attributeTypeMap = {
    description: {
        baseName: "description",
        type: "string",
    },
    metadata: {
        baseName: "metadata",
        type: "{ [key: string]: any; }",
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LLMObsDatasetDataAttributesRequest.js.map