"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineOcsfMapperProcessor = void 0;
/**
 * The `ocsf_mapper` processor transforms logs into the OCSF schema using a predefined mapping configuration.
 *
 * **Supported pipeline types:** logs
 */
class ObservabilityPipelineOcsfMapperProcessor {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineOcsfMapperProcessor.attributeTypeMap;
    }
}
exports.ObservabilityPipelineOcsfMapperProcessor = ObservabilityPipelineOcsfMapperProcessor;
/**
 * @ignore
 */
ObservabilityPipelineOcsfMapperProcessor.attributeTypeMap = {
    displayName: {
        baseName: "display_name",
        type: "string",
    },
    enabled: {
        baseName: "enabled",
        type: "boolean",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    include: {
        baseName: "include",
        type: "string",
        required: true,
    },
    mappings: {
        baseName: "mappings",
        type: "Array<ObservabilityPipelineOcsfMapperProcessorMapping>",
        required: true,
    },
    type: {
        baseName: "type",
        type: "ObservabilityPipelineOcsfMapperProcessorType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineOcsfMapperProcessor.js.map