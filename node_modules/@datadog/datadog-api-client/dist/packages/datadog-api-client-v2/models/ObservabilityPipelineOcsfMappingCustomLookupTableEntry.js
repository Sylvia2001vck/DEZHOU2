"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineOcsfMappingCustomLookupTableEntry = void 0;
/**
 * A single entry in a lookup table for value transformation.
 */
class ObservabilityPipelineOcsfMappingCustomLookupTableEntry {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineOcsfMappingCustomLookupTableEntry.attributeTypeMap;
    }
}
exports.ObservabilityPipelineOcsfMappingCustomLookupTableEntry = ObservabilityPipelineOcsfMappingCustomLookupTableEntry;
/**
 * @ignore
 */
ObservabilityPipelineOcsfMappingCustomLookupTableEntry.attributeTypeMap = {
    contains: {
        baseName: "contains",
        type: "string",
    },
    equals: {
        baseName: "equals",
        type: "any",
    },
    equalsSource: {
        baseName: "equals_source",
        type: "string",
    },
    matches: {
        baseName: "matches",
        type: "string",
    },
    notMatches: {
        baseName: "not_matches",
        type: "string",
    },
    value: {
        baseName: "value",
        type: "any",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineOcsfMappingCustomLookupTableEntry.js.map