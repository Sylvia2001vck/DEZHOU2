"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineSensitiveDataScannerProcessorLibraryPattern = void 0;
/**
 * Specifies a pattern from Datadog’s sensitive data detection library to match known sensitive data types.
 */
class ObservabilityPipelineSensitiveDataScannerProcessorLibraryPattern {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineSensitiveDataScannerProcessorLibraryPattern.attributeTypeMap;
    }
}
exports.ObservabilityPipelineSensitiveDataScannerProcessorLibraryPattern = ObservabilityPipelineSensitiveDataScannerProcessorLibraryPattern;
/**
 * @ignore
 */
ObservabilityPipelineSensitiveDataScannerProcessorLibraryPattern.attributeTypeMap = {
    options: {
        baseName: "options",
        type: "ObservabilityPipelineSensitiveDataScannerProcessorLibraryPatternOptions",
        required: true,
    },
    type: {
        baseName: "type",
        type: "ObservabilityPipelineSensitiveDataScannerProcessorLibraryPatternType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineSensitiveDataScannerProcessorLibraryPattern.js.map