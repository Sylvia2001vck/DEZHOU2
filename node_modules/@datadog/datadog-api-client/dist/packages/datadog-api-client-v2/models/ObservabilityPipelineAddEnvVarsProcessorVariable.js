"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineAddEnvVarsProcessorVariable = void 0;
/**
 * Defines a mapping between an environment variable and a log field.
 */
class ObservabilityPipelineAddEnvVarsProcessorVariable {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineAddEnvVarsProcessorVariable.attributeTypeMap;
    }
}
exports.ObservabilityPipelineAddEnvVarsProcessorVariable = ObservabilityPipelineAddEnvVarsProcessorVariable;
/**
 * @ignore
 */
ObservabilityPipelineAddEnvVarsProcessorVariable.attributeTypeMap = {
    field: {
        baseName: "field",
        type: "string",
        required: true,
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
//# sourceMappingURL=ObservabilityPipelineAddEnvVarsProcessorVariable.js.map