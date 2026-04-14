"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineMemoryBufferSizeOptions = void 0;
/**
 * Options for configuring a memory buffer by queue length.
 */
class ObservabilityPipelineMemoryBufferSizeOptions {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineMemoryBufferSizeOptions.attributeTypeMap;
    }
}
exports.ObservabilityPipelineMemoryBufferSizeOptions = ObservabilityPipelineMemoryBufferSizeOptions;
/**
 * @ignore
 */
ObservabilityPipelineMemoryBufferSizeOptions.attributeTypeMap = {
    maxEvents: {
        baseName: "max_events",
        type: "number",
        required: true,
        format: "int64",
    },
    type: {
        baseName: "type",
        type: "ObservabilityPipelineBufferOptionsMemoryType",
    },
    whenFull: {
        baseName: "when_full",
        type: "ObservabilityPipelineBufferOptionsWhenFull",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineMemoryBufferSizeOptions.js.map