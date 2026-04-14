"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineOcsfMappingCustom = void 0;
/**
 * Custom OCSF mapping configuration for transforming logs.
 */
class ObservabilityPipelineOcsfMappingCustom {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineOcsfMappingCustom.attributeTypeMap;
    }
}
exports.ObservabilityPipelineOcsfMappingCustom = ObservabilityPipelineOcsfMappingCustom;
/**
 * @ignore
 */
ObservabilityPipelineOcsfMappingCustom.attributeTypeMap = {
    mapping: {
        baseName: "mapping",
        type: "Array<ObservabilityPipelineOcsfMappingCustomFieldMapping>",
        required: true,
    },
    metadata: {
        baseName: "metadata",
        type: "ObservabilityPipelineOcsfMappingCustomMetadata",
        required: true,
    },
    version: {
        baseName: "version",
        type: "number",
        required: true,
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineOcsfMappingCustom.js.map