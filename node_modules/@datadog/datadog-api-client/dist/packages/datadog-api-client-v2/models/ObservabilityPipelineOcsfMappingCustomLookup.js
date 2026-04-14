"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineOcsfMappingCustomLookup = void 0;
/**
 * Lookup table configuration for mapping source values to destination values.
 */
class ObservabilityPipelineOcsfMappingCustomLookup {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineOcsfMappingCustomLookup.attributeTypeMap;
    }
}
exports.ObservabilityPipelineOcsfMappingCustomLookup = ObservabilityPipelineOcsfMappingCustomLookup;
/**
 * @ignore
 */
ObservabilityPipelineOcsfMappingCustomLookup.attributeTypeMap = {
    _default: {
        baseName: "default",
        type: "any",
    },
    table: {
        baseName: "table",
        type: "Array<ObservabilityPipelineOcsfMappingCustomLookupTableEntry>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineOcsfMappingCustomLookup.js.map