"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineCustomProcessorRemap = void 0;
/**
 * Defines a single VRL remap rule with its own filtering and transformation logic.
 */
class ObservabilityPipelineCustomProcessorRemap {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineCustomProcessorRemap.attributeTypeMap;
    }
}
exports.ObservabilityPipelineCustomProcessorRemap = ObservabilityPipelineCustomProcessorRemap;
/**
 * @ignore
 */
ObservabilityPipelineCustomProcessorRemap.attributeTypeMap = {
    dropOnError: {
        baseName: "drop_on_error",
        type: "boolean",
        required: true,
    },
    enabled: {
        baseName: "enabled",
        type: "boolean",
    },
    include: {
        baseName: "include",
        type: "string",
        required: true,
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    source: {
        baseName: "source",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineCustomProcessorRemap.js.map