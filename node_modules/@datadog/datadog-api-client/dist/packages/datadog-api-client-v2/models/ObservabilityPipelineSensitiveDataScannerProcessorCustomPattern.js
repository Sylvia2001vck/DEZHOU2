"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineSensitiveDataScannerProcessorCustomPattern = void 0;
/**
 * Defines a custom regex-based pattern for identifying sensitive data in logs.
 */
class ObservabilityPipelineSensitiveDataScannerProcessorCustomPattern {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineSensitiveDataScannerProcessorCustomPattern.attributeTypeMap;
    }
}
exports.ObservabilityPipelineSensitiveDataScannerProcessorCustomPattern = ObservabilityPipelineSensitiveDataScannerProcessorCustomPattern;
/**
 * @ignore
 */
ObservabilityPipelineSensitiveDataScannerProcessorCustomPattern.attributeTypeMap = {
    options: {
        baseName: "options",
        type: "ObservabilityPipelineSensitiveDataScannerProcessorCustomPatternOptions",
        required: true,
    },
    type: {
        baseName: "type",
        type: "ObservabilityPipelineSensitiveDataScannerProcessorCustomPatternType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineSensitiveDataScannerProcessorCustomPattern.js.map