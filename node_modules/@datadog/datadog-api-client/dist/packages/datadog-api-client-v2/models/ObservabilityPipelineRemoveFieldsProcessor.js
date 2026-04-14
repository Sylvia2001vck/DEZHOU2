"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineRemoveFieldsProcessor = void 0;
/**
 * The `remove_fields` processor deletes specified fields from logs.
 *
 * **Supported pipeline types:** logs
 */
class ObservabilityPipelineRemoveFieldsProcessor {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineRemoveFieldsProcessor.attributeTypeMap;
    }
}
exports.ObservabilityPipelineRemoveFieldsProcessor = ObservabilityPipelineRemoveFieldsProcessor;
/**
 * @ignore
 */
ObservabilityPipelineRemoveFieldsProcessor.attributeTypeMap = {
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
    type: {
        baseName: "type",
        type: "ObservabilityPipelineRemoveFieldsProcessorType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineRemoveFieldsProcessor.js.map