"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMObsProjectUpdateDataAttributesRequest = void 0;
/**
 * Attributes for updating an LLM Observability project.
 */
class LLMObsProjectUpdateDataAttributesRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LLMObsProjectUpdateDataAttributesRequest.attributeTypeMap;
    }
}
exports.LLMObsProjectUpdateDataAttributesRequest = LLMObsProjectUpdateDataAttributesRequest;
/**
 * @ignore
 */
LLMObsProjectUpdateDataAttributesRequest.attributeTypeMap = {
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
//# sourceMappingURL=LLMObsProjectUpdateDataAttributesRequest.js.map