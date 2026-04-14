"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineDedupeProcessor = void 0;
/**
 * The `dedupe` processor removes duplicate fields in log events.
 *
 * **Supported pipeline types:** logs
 */
class ObservabilityPipelineDedupeProcessor {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineDedupeProcessor.attributeTypeMap;
    }
}
exports.ObservabilityPipelineDedupeProcessor = ObservabilityPipelineDedupeProcessor;
/**
 * @ignore
 */
ObservabilityPipelineDedupeProcessor.attributeTypeMap = {
    cache: {
        baseName: "cache",
        type: "ObservabilityPipelineDedupeProcessorCache",
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
    fields: {
        baseName: "fields",
        type: "Array<string>",
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
    mode: {
        baseName: "mode",
        type: "ObservabilityPipelineDedupeProcessorMode",
        required: true,
    },
    type: {
        baseName: "type",
        type: "ObservabilityPipelineDedupeProcessorType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineDedupeProcessor.js.map