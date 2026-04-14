"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineSensitiveDataScannerProcessorScopeAll = void 0;
/**
 * Applies scanning across all available fields.
 */
class ObservabilityPipelineSensitiveDataScannerProcessorScopeAll {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineSensitiveDataScannerProcessorScopeAll.attributeTypeMap;
    }
}
exports.ObservabilityPipelineSensitiveDataScannerProcessorScopeAll = ObservabilityPipelineSensitiveDataScannerProcessorScopeAll;
/**
 * @ignore
 */
ObservabilityPipelineSensitiveDataScannerProcessorScopeAll.attributeTypeMap = {
    target: {
        baseName: "target",
        type: "ObservabilityPipelineSensitiveDataScannerProcessorScopeAllTarget",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineSensitiveDataScannerProcessorScopeAll.js.map