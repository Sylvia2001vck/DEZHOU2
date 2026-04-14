"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineMemoryBufferOptions = void 0;
/**
 * Options for configuring a memory buffer by byte size.
 */
class ObservabilityPipelineMemoryBufferOptions {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineMemoryBufferOptions.attributeTypeMap;
    }
}
exports.ObservabilityPipelineMemoryBufferOptions = ObservabilityPipelineMemoryBufferOptions;
/**
 * @ignore
 */
ObservabilityPipelineMemoryBufferOptions.attributeTypeMap = {
    maxSize: {
        baseName: "max_size",
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
//# sourceMappingURL=ObservabilityPipelineMemoryBufferOptions.js.map