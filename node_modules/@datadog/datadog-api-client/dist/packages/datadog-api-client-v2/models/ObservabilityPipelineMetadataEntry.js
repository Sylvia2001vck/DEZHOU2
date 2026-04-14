"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineMetadataEntry = void 0;
/**
 * A custom metadata entry.
 */
class ObservabilityPipelineMetadataEntry {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineMetadataEntry.attributeTypeMap;
    }
}
exports.ObservabilityPipelineMetadataEntry = ObservabilityPipelineMetadataEntry;
/**
 * @ignore
 */
ObservabilityPipelineMetadataEntry.attributeTypeMap = {
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
//# sourceMappingURL=ObservabilityPipelineMetadataEntry.js.map