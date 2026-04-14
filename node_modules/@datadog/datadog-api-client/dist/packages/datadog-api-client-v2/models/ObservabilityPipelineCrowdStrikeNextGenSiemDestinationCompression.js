"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineCrowdStrikeNextGenSiemDestinationCompression = void 0;
/**
 * Compression configuration for log events.
 */
class ObservabilityPipelineCrowdStrikeNextGenSiemDestinationCompression {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineCrowdStrikeNextGenSiemDestinationCompression.attributeTypeMap;
    }
}
exports.ObservabilityPipelineCrowdStrikeNextGenSiemDestinationCompression = ObservabilityPipelineCrowdStrikeNextGenSiemDestinationCompression;
/**
 * @ignore
 */
ObservabilityPipelineCrowdStrikeNextGenSiemDestinationCompression.attributeTypeMap = {
    algorithm: {
        baseName: "algorithm",
        type: "ObservabilityPipelineCrowdStrikeNextGenSiemDestinationCompressionAlgorithm",
        required: true,
    },
    level: {
        baseName: "level",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineCrowdStrikeNextGenSiemDestinationCompression.js.map