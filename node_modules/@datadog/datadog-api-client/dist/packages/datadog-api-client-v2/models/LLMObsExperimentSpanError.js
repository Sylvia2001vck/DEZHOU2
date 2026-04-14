"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMObsExperimentSpanError = void 0;
/**
 * Error details for an experiment span.
 */
class LLMObsExperimentSpanError {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LLMObsExperimentSpanError.attributeTypeMap;
    }
}
exports.LLMObsExperimentSpanError = LLMObsExperimentSpanError;
/**
 * @ignore
 */
LLMObsExperimentSpanError.attributeTypeMap = {
    message: {
        baseName: "message",
        type: "string",
    },
    stack: {
        baseName: "stack",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LLMObsExperimentSpanError.js.map