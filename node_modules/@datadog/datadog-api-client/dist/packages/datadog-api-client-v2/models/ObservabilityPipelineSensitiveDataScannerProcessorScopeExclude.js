"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineSensitiveDataScannerProcessorScopeExclude = void 0;
/**
 * Excludes specific fields from sensitive data scanning.
 */
class ObservabilityPipelineSensitiveDataScannerProcessorScopeExclude {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineSensitiveDataScannerProcessorScopeExclude.attributeTypeMap;
    }
}
exports.ObservabilityPipelineSensitiveDataScannerProcessorScopeExclude = ObservabilityPipelineSensitiveDataScannerProcessorScopeExclude;
/**
 * @ignore
 */
ObservabilityPipelineSensitiveDataScannerProcessorScopeExclude.attributeTypeMap = {
    options: {
        baseName: "options",
        type: "ObservabilityPipelineSensitiveDataScannerProcessorScopeOptions",
        required: true,
    },
    target: {
        baseName: "target",
        type: "ObservabilityPipelineSensitiveDataScannerProcessorScopeExcludeTarget",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineSensitiveDataScannerProcessorScopeExclude.js.map