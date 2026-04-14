"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedact = void 0;
/**
 * Configuration for partially redacting matched sensitive data.
 */
class ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedact {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedact.attributeTypeMap;
    }
}
exports.ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedact = ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedact;
/**
 * @ignore
 */
ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedact.attributeTypeMap = {
    action: {
        baseName: "action",
        type: "ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedactAction",
        required: true,
    },
    options: {
        baseName: "options",
        type: "ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedactOptions",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedact.js.map