"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedactOptions = void 0;
/**
 * Controls how partial redaction is applied, including character count and direction.
 */
class ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedactOptions {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedactOptions.attributeTypeMap;
    }
}
exports.ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedactOptions = ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedactOptions;
/**
 * @ignore
 */
ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedactOptions.attributeTypeMap = {
    characters: {
        baseName: "characters",
        type: "number",
        required: true,
        format: "int64",
    },
    direction: {
        baseName: "direction",
        type: "ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedactOptionsDirection",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedactOptions.js.map