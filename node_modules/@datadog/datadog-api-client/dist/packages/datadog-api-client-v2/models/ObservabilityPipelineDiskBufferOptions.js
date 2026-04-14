"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineDiskBufferOptions = void 0;
/**
 * Options for configuring a disk buffer.
 */
class ObservabilityPipelineDiskBufferOptions {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineDiskBufferOptions.attributeTypeMap;
    }
}
exports.ObservabilityPipelineDiskBufferOptions = ObservabilityPipelineDiskBufferOptions;
/**
 * @ignore
 */
ObservabilityPipelineDiskBufferOptions.attributeTypeMap = {
    maxSize: {
        baseName: "max_size",
        type: "number",
        required: true,
        format: "int64",
    },
    type: {
        baseName: "type",
        type: "ObservabilityPipelineBufferOptionsDiskType",
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
//# sourceMappingURL=ObservabilityPipelineDiskBufferOptions.js.map