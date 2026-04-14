"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMObsDeleteProjectsDataAttributesRequest = void 0;
/**
 * Attributes for deleting LLM Observability projects.
 */
class LLMObsDeleteProjectsDataAttributesRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LLMObsDeleteProjectsDataAttributesRequest.attributeTypeMap;
    }
}
exports.LLMObsDeleteProjectsDataAttributesRequest = LLMObsDeleteProjectsDataAttributesRequest;
/**
 * @ignore
 */
LLMObsDeleteProjectsDataAttributesRequest.attributeTypeMap = {
    projectIds: {
        baseName: "project_ids",
        type: "Array<string>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LLMObsDeleteProjectsDataAttributesRequest.js.map