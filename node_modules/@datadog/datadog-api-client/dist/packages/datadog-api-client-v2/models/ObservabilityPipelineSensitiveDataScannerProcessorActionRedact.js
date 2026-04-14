"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineSensitiveDataScannerProcessorActionRedact = void 0;
/**
 * Configuration for completely redacting matched sensitive data.
 */
class ObservabilityPipelineSensitiveDataScannerProcessorActionRedact {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineSensitiveDataScannerProcessorActionRedact.attributeTypeMap;
    }
}
exports.ObservabilityPipelineSensitiveDataScannerProcessorActionRedact = ObservabilityPipelineSensitiveDataScannerProcessorActionRedact;
/**
 * @ignore
 */
ObservabilityPipelineSensitiveDataScannerProcessorActionRedact.attributeTypeMap = {
    action: {
        baseName: "action",
        type: "ObservabilityPipelineSensitiveDataScannerProcessorActionRedactAction",
        required: true,
    },
    options: {
        baseName: "options",
        type: "ObservabilityPipelineSensitiveDataScannerProcessorActionRedactOptions",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineSensitiveDataScannerProcessorActionRedact.js.map