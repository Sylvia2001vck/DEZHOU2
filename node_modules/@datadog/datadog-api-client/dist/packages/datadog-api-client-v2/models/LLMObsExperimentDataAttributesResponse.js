"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMObsExperimentDataAttributesResponse = void 0;
/**
 * Attributes of an LLM Observability experiment.
 */
class LLMObsExperimentDataAttributesResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LLMObsExperimentDataAttributesResponse.attributeTypeMap;
    }
}
exports.LLMObsExperimentDataAttributesResponse = LLMObsExperimentDataAttributesResponse;
/**
 * @ignore
 */
LLMObsExperimentDataAttributesResponse.attributeTypeMap = {
    config: {
        baseName: "config",
        type: "{ [key: string]: any; }",
        required: true,
    },
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
    projectId: {
        baseName: "project_id",
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
//# sourceMappingURL=LLMObsExperimentDataAttributesResponse.js.map