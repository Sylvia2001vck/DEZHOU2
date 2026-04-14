"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineParseXMLProcessor = void 0;
/**
 * The `parse_xml` processor parses XML from a specified field and extracts it into the event.
 *
 * **Supported pipeline types:** logs
 */
class ObservabilityPipelineParseXMLProcessor {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineParseXMLProcessor.attributeTypeMap;
    }
}
exports.ObservabilityPipelineParseXMLProcessor = ObservabilityPipelineParseXMLProcessor;
/**
 * @ignore
 */
ObservabilityPipelineParseXMLProcessor.attributeTypeMap = {
    alwaysUseTextKey: {
        baseName: "always_use_text_key",
        type: "boolean",
    },
    attrPrefix: {
        baseName: "attr_prefix",
        type: "string",
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
    field: {
        baseName: "field",
        type: "string",
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
    includeAttr: {
        baseName: "include_attr",
        type: "boolean",
    },
    parseBool: {
        baseName: "parse_bool",
        type: "boolean",
    },
    parseNull: {
        baseName: "parse_null",
        type: "boolean",
    },
    parseNumber: {
        baseName: "parse_number",
        type: "boolean",
    },
    textKey: {
        baseName: "text_key",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "ObservabilityPipelineParseXMLProcessorType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineParseXMLProcessor.js.map