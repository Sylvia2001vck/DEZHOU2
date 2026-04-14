"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineAddFieldsProcessor = void 0;
/**
 * The `add_fields` processor adds static key-value fields to logs.
 *
 * **Supported pipeline types:** logs
 */
class ObservabilityPipelineAddFieldsProcessor {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineAddFieldsProcessor.attributeTypeMap;
    }
}
exports.ObservabilityPipelineAddFieldsProcessor = ObservabilityPipelineAddFieldsProcessor;
/**
 * @ignore
 */
ObservabilityPipelineAddFieldsProcessor.attributeTypeMap = {
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
        type: "Array<ObservabilityPipelineFieldValue>",
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
        type: "ObservabilityPipelineAddFieldsProcessorType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineAddFieldsProcessor.js.map