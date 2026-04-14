"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMObsDatasetUpdateDataAttributesRequest = void 0;
/**
 * Attributes for updating an LLM Observability dataset.
 */
class LLMObsDatasetUpdateDataAttributesRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LLMObsDatasetUpdateDataAttributesRequest.attributeTypeMap;
    }
}
exports.LLMObsDatasetUpdateDataAttributesRequest = LLMObsDatasetUpdateDataAttributesRequest;
/**
 * @ignore
 */
LLMObsDatasetUpdateDataAttributesRequest.attributeTypeMap = {
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
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LLMObsDatasetUpdateDataAttributesRequest.js.map