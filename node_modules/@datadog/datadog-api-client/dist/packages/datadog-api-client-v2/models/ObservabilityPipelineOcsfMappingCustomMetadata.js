"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineOcsfMappingCustomMetadata = void 0;
/**
 * Metadata for the custom OCSF mapping.
 */
class ObservabilityPipelineOcsfMappingCustomMetadata {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineOcsfMappingCustomMetadata.attributeTypeMap;
    }
}
exports.ObservabilityPipelineOcsfMappingCustomMetadata = ObservabilityPipelineOcsfMappingCustomMetadata;
/**
 * @ignore
 */
ObservabilityPipelineOcsfMappingCustomMetadata.attributeTypeMap = {
    _class: {
        baseName: "class",
        type: "string",
        required: true,
    },
    profiles: {
        baseName: "profiles",
        type: "Array<string>",
    },
    version: {
        baseName: "version",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineOcsfMappingCustomMetadata.js.map