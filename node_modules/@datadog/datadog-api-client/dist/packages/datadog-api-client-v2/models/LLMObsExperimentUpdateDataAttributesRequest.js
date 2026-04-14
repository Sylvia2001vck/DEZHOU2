"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMObsExperimentUpdateDataAttributesRequest = void 0;
/**
 * Attributes for updating an LLM Observability experiment.
 */
class LLMObsExperimentUpdateDataAttributesRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LLMObsExperimentUpdateDataAttributesRequest.attributeTypeMap;
    }
}
exports.LLMObsExperimentUpdateDataAttributesRequest = LLMObsExperimentUpdateDataAttributesRequest;
/**
 * @ignore
 */
LLMObsExperimentUpdateDataAttributesRequest.attributeTypeMap = {
    description: {
        baseName: "description",
        type: "string",
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
//# sourceMappingURL=LLMObsExperimentUpdateDataAttributesRequest.js.map