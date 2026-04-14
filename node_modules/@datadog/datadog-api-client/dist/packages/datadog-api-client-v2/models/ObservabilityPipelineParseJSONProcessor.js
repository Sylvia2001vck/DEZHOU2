"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineParseJSONProcessor = void 0;
/**
 * The `parse_json` processor extracts JSON from a specified field and flattens it into the event. This is useful when logs contain embedded JSON as a string.
 *
 * **Supported pipeline types:** logs
 */
class ObservabilityPipelineParseJSONProcessor {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineParseJSONProcessor.attributeTypeMap;
    }
}
exports.ObservabilityPipelineParseJSONProcessor = ObservabilityPipelineParseJSONProcessor;
/**
 * @ignore
 */
ObservabilityPipelineParseJSONProcessor.attributeTypeMap = {
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
    type: {
        baseName: "type",
        type: "ObservabilityPipelineParseJSONProcessorType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineParseJSONProcessor.js.map