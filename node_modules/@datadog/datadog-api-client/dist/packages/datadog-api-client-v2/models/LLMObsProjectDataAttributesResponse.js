"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMObsProjectDataAttributesResponse = void 0;
/**
 * Attributes of an LLM Observability project.
 */
class LLMObsProjectDataAttributesResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LLMObsProjectDataAttributesResponse.attributeTypeMap;
    }
}
exports.LLMObsProjectDataAttributesResponse = LLMObsProjectDataAttributesResponse;
/**
 * @ignore
 */
LLMObsProjectDataAttributesResponse.attributeTypeMap = {
    createdAt: {
        baseName: "created_at",
        type: "Date",
        required: true,
        format: "date-time",
    },
    description: {
        baseName: "description",
        type: "string",
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
//# sourceMappingURL=LLMObsProjectDataAttributesResponse.js.map