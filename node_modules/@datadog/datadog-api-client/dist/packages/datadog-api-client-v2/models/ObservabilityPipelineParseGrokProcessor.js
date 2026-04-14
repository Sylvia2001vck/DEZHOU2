"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineParseGrokProcessor = void 0;
/**
 * The `parse_grok` processor extracts structured fields from unstructured log messages using Grok patterns.
 *
 * **Supported pipeline types:** logs
 */
class ObservabilityPipelineParseGrokProcessor {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineParseGrokProcessor.attributeTypeMap;
    }
}
exports.ObservabilityPipelineParseGrokProcessor = ObservabilityPipelineParseGrokProcessor;
/**
 * @ignore
 */
ObservabilityPipelineParseGrokProcessor.attributeTypeMap = {
    disableLibraryRules: {
        baseName: "disable_library_rules",
        type: "boolean",
    },
    displayName: {
        baseName: "display_name",
        type: "string",
    },
    enabled: {
        baseName: "enabled",
        type: "boolean",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    include: {
        baseName: "include",
        type: "string",
        required: true,
    },
    rules: {
        baseName: "rules",
        type: "Array<ObservabilityPipelineParseGrokProcessorRule>",
        required: true,
    },
    type: {
        baseName: "type",
        type: "ObservabilityPipelineParseGrokProcessorType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineParseGrokProcessor.js.map