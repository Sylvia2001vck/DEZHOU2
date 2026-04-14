"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineSensitiveDataScannerProcessorActionHash = void 0;
/**
 * Configuration for hashing matched sensitive values.
 */
class ObservabilityPipelineSensitiveDataScannerProcessorActionHash {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineSensitiveDataScannerProcessorActionHash.attributeTypeMap;
    }
}
exports.ObservabilityPipelineSensitiveDataScannerProcessorActionHash = ObservabilityPipelineSensitiveDataScannerProcessorActionHash;
/**
 * @ignore
 */
ObservabilityPipelineSensitiveDataScannerProcessorActionHash.attributeTypeMap = {
    action: {
        baseName: "action",
        type: "ObservabilityPipelineSensitiveDataScannerProcessorActionHashAction",
        required: true,
    },
    options: {
        baseName: "options",
        type: "any",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineSensitiveDataScannerProcessorActionHash.js.map