"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineHttpClientDestinationCompression = void 0;
/**
 * Compression configuration for HTTP requests.
 */
class ObservabilityPipelineHttpClientDestinationCompression {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineHttpClientDestinationCompression.attributeTypeMap;
    }
}
exports.ObservabilityPipelineHttpClientDestinationCompression = ObservabilityPipelineHttpClientDestinationCompression;
/**
 * @ignore
 */
ObservabilityPipelineHttpClientDestinationCompression.attributeTypeMap = {
    algorithm: {
        baseName: "algorithm",
        type: "ObservabilityPipelineHttpClientDestinationCompressionAlgorithm",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineHttpClientDestinationCompression.js.map