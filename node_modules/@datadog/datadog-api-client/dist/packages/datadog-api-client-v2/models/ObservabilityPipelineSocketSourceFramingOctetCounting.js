"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineSocketSourceFramingOctetCounting = void 0;
/**
 * Byte frames according to the octet counting format as per RFC6587.
 */
class ObservabilityPipelineSocketSourceFramingOctetCounting {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineSocketSourceFramingOctetCounting.attributeTypeMap;
    }
}
exports.ObservabilityPipelineSocketSourceFramingOctetCounting = ObservabilityPipelineSocketSourceFramingOctetCounting;
/**
 * @ignore
 */
ObservabilityPipelineSocketSourceFramingOctetCounting.attributeTypeMap = {
    method: {
        baseName: "method",
        type: "ObservabilityPipelineSocketSourceFramingOctetCountingMethod",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineSocketSourceFramingOctetCounting.js.map