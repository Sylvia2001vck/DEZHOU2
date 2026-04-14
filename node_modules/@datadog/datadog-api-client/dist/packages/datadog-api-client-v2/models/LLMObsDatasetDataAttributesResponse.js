"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMObsDatasetDataAttributesResponse = void 0;
/**
 * Attributes of an LLM Observability dataset.
 */
class LLMObsDatasetDataAttributesResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LLMObsDatasetDataAttributesResponse.attributeTypeMap;
    }
}
exports.LLMObsDatasetDataAttributesResponse = LLMObsDatasetDataAttributesResponse;
/**
 * @ignore
 */
LLMObsDatasetDataAttributesResponse.attributeTypeMap = {
    createdAt: {
        baseName: "created_at",
        type: "Date",
        required: true,
        format: "date-time",
    },
    currentVersion: {
        baseName: "current_version",
        type: "number",
        required: true,
        format: "int64",
    },
    description: {
        baseName: "description",
        type: "string",
        required: true,
    },
    metadata: {
        baseName: "metadata",
        type: "{ [key: string]: any; }",
        required: true,
    },
    name: {
        baseName: "name",
        type: "string",
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
//# sourceMappingURL=LLMObsDatasetDataAttributesResponse.js.map