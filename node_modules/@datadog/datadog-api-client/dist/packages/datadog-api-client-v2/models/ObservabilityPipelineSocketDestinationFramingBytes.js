"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineSocketDestinationFramingBytes = void 0;
/**
 * Event data is not delimited at all.
 */
class ObservabilityPipelineSocketDestinationFramingBytes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineSocketDestinationFramingBytes.attributeTypeMap;
    }
}
exports.ObservabilityPipelineSocketDestinationFramingBytes = ObservabilityPipelineSocketDestinationFramingBytes;
/**
 * @ignore
 */
ObservabilityPipelineSocketDestinationFramingBytes.attributeTypeMap = {
    method: {
        baseName: "method",
        type: "ObservabilityPipelineSocketDestinationFramingBytesMethod",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineSocketDestinationFramingBytes.js.map