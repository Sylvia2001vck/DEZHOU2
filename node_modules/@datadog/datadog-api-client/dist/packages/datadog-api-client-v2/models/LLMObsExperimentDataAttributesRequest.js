"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMObsExperimentDataAttributesRequest = void 0;
/**
 * Attributes for creating an LLM Observability experiment.
 */
class LLMObsExperimentDataAttributesRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LLMObsExperimentDataAttributesRequest.attributeTypeMap;
    }
}
exports.LLMObsExperimentDataAttributesRequest = LLMObsExperimentDataAttributesRequest;
/**
 * @ignore
 */
LLMObsExperimentDataAttributesRequest.attributeTypeMap = {
    config: {
        baseName: "config",
        type: "{ [key: string]: any; }",
    },
    datasetId: {
        baseName: "dataset_id",
        type: "string",
        required: true,
    },
    datasetVersion: {
        baseName: "dataset_version",
        type: "number",
        format: "int64",
    },
    description: {
        baseName: "description",
        type: "string",
    },
    ensureUnique: {
        baseName: "ensure_unique",
        type: "boolean",
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
    projectId: {
        baseName: "project_id",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LLMObsExperimentDataAttributesRequest.js.map