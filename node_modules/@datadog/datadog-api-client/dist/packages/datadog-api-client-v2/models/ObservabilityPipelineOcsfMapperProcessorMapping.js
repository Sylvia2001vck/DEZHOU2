"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineOcsfMapperProcessorMapping = void 0;
/**
 * Defines how specific events are transformed to OCSF using a mapping configuration.
 */
class ObservabilityPipelineOcsfMapperProcessorMapping {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineOcsfMapperProcessorMapping.attributeTypeMap;
    }
}
exports.ObservabilityPipelineOcsfMapperProcessorMapping = ObservabilityPipelineOcsfMapperProcessorMapping;
/**
 * @ignore
 */
ObservabilityPipelineOcsfMapperProcessorMapping.attributeTypeMap = {
    include: {
        baseName: "include",
        type: "string",
        required: true,
    },
    mapping: {
        baseName: "mapping",
        type: "ObservabilityPipelineOcsfMapperProcessorMappingMapping",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineOcsfMapperProcessorMapping.js.map