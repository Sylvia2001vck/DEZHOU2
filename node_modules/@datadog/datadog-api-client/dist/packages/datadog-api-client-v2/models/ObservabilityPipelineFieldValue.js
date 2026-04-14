"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineFieldValue = void 0;
/**
 * Represents a static key-value pair used in various processors.
 */
class ObservabilityPipelineFieldValue {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineFieldValue.attributeTypeMap;
    }
}
exports.ObservabilityPipelineFieldValue = ObservabilityPipelineFieldValue;
/**
 * @ignore
 */
ObservabilityPipelineFieldValue.attributeTypeMap = {
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    value: {
        baseName: "value",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineFieldValue.js.map