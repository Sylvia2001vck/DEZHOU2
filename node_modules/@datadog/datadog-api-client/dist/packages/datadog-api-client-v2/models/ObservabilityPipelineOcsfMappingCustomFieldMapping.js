"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineOcsfMappingCustomFieldMapping = void 0;
/**
 * Defines a single field mapping rule for transforming a source field to an OCSF destination field.
 */
class ObservabilityPipelineOcsfMappingCustomFieldMapping {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineOcsfMappingCustomFieldMapping.attributeTypeMap;
    }
}
exports.ObservabilityPipelineOcsfMappingCustomFieldMapping = ObservabilityPipelineOcsfMappingCustomFieldMapping;
/**
 * @ignore
 */
ObservabilityPipelineOcsfMappingCustomFieldMapping.attributeTypeMap = {
    _default: {
        baseName: "default",
        type: "any",
    },
    dest: {
        baseName: "dest",
        type: "string",
        required: true,
    },
    lookup: {
        baseName: "lookup",
        type: "ObservabilityPipelineOcsfMappingCustomLookup",
    },
    source: {
        baseName: "source",
        type: "any",
    },
    sources: {
        baseName: "sources",
        type: "any",
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
//# sourceMappingURL=ObservabilityPipelineOcsfMappingCustomFieldMapping.js.map