"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineSensitiveDataScannerProcessorRule = void 0;
/**
 * Defines a rule for detecting sensitive data, including matching pattern, scope, and the action to take.
 */
class ObservabilityPipelineSensitiveDataScannerProcessorRule {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineSensitiveDataScannerProcessorRule.attributeTypeMap;
    }
}
exports.ObservabilityPipelineSensitiveDataScannerProcessorRule = ObservabilityPipelineSensitiveDataScannerProcessorRule;
/**
 * @ignore
 */
ObservabilityPipelineSensitiveDataScannerProcessorRule.attributeTypeMap = {
    keywordOptions: {
        baseName: "keyword_options",
        type: "ObservabilityPipelineSensitiveDataScannerProcessorKeywordOptions",
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    onMatch: {
        baseName: "on_match",
        type: "ObservabilityPipelineSensitiveDataScannerProcessorAction",
        required: true,
    },
    pattern: {
        baseName: "pattern",
        type: "ObservabilityPipelineSensitiveDataScannerProcessorPattern",
        required: true,
    },
    scope: {
        baseName: "scope",
        type: "ObservabilityPipelineSensitiveDataScannerProcessorScope",
        required: true,
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineSensitiveDataScannerProcessorRule.js.map