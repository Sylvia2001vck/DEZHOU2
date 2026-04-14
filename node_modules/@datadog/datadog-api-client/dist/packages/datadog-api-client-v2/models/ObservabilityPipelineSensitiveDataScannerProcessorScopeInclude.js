"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineSensitiveDataScannerProcessorScopeInclude = void 0;
/**
 * Includes only specific fields for sensitive data scanning.
 */
class ObservabilityPipelineSensitiveDataScannerProcessorScopeInclude {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineSensitiveDataScannerProcessorScopeInclude.attributeTypeMap;
    }
}
exports.ObservabilityPipelineSensitiveDataScannerProcessorScopeInclude = ObservabilityPipelineSensitiveDataScannerProcessorScopeInclude;
/**
 * @ignore
 */
ObservabilityPipelineSensitiveDataScannerProcessorScopeInclude.attributeTypeMap = {
    options: {
        baseName: "options",
        type: "ObservabilityPipelineSensitiveDataScannerProcessorScopeOptions",
        required: true,
    },
    target: {
        baseName: "target",
        type: "ObservabilityPipelineSensitiveDataScannerProcessorScopeIncludeTarget",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineSensitiveDataScannerProcessorScopeInclude.js.map