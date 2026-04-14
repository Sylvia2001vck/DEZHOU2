"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineDedupeProcessorCache = void 0;
/**
 * Configuration for the cache used to detect duplicates.
 */
class ObservabilityPipelineDedupeProcessorCache {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineDedupeProcessorCache.attributeTypeMap;
    }
}
exports.ObservabilityPipelineDedupeProcessorCache = ObservabilityPipelineDedupeProcessorCache;
/**
 * @ignore
 */
ObservabilityPipelineDedupeProcessorCache.attributeTypeMap = {
    numEvents: {
        baseName: "num_events",
        type: "number",
        required: true,
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineDedupeProcessorCache.js.map