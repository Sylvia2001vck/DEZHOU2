"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMObsProjectDataAttributesRequest = void 0;
/**
 * Attributes for creating an LLM Observability project.
 */
class LLMObsProjectDataAttributesRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LLMObsProjectDataAttributesRequest.attributeTypeMap;
    }
}
exports.LLMObsProjectDataAttributesRequest = LLMObsProjectDataAttributesRequest;
/**
 * @ignore
 */
LLMObsProjectDataAttributesRequest.attributeTypeMap = {
    description: {
        baseName: "description",
        type: "string",
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
//# sourceMappingURL=LLMObsProjectDataAttributesRequest.js.map