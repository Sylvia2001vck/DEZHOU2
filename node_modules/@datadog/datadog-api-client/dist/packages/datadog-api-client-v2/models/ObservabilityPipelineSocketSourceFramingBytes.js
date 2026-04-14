"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineSocketSourceFramingBytes = void 0;
/**
 * Byte frames are passed through as-is according to the underlying I/O boundaries (for example, split between messages or stream segments).
 */
class ObservabilityPipelineSocketSourceFramingBytes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineSocketSourceFramingBytes.attributeTypeMap;
    }
}
exports.ObservabilityPipelineSocketSourceFramingBytes = ObservabilityPipelineSocketSourceFramingBytes;
/**
 * @ignore
 */
ObservabilityPipelineSocketSourceFramingBytes.attributeTypeMap = {
    method: {
        baseName: "method",
        type: "ObservabilityPipelineSocketSourceFramingBytesMethod",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineSocketSourceFramingBytes.js.map