"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineSocketSourceFramingChunkedGelf = void 0;
/**
 * Byte frames which are chunked GELF messages.
 */
class ObservabilityPipelineSocketSourceFramingChunkedGelf {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineSocketSourceFramingChunkedGelf.attributeTypeMap;
    }
}
exports.ObservabilityPipelineSocketSourceFramingChunkedGelf = ObservabilityPipelineSocketSourceFramingChunkedGelf;
/**
 * @ignore
 */
ObservabilityPipelineSocketSourceFramingChunkedGelf.attributeTypeMap = {
    method: {
        baseName: "method",
        type: "ObservabilityPipelineSocketSourceFramingChunkedGelfMethod",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineSocketSourceFramingChunkedGelf.js.map