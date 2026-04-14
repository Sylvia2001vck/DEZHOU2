"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineRenameFieldsProcessor = void 0;
/**
 * The `rename_fields` processor changes field names.
 *
 * **Supported pipeline types:** logs
 */
class ObservabilityPipelineRenameFieldsProcessor {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineRenameFieldsProcessor.attributeTypeMap;
    }
}
exports.ObservabilityPipelineRenameFieldsProcessor = ObservabilityPipelineRenameFieldsProcessor;
/**
 * @ignore
 */
ObservabilityPipelineRenameFieldsProcessor.attributeTypeMap = {
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
        type: "Array<ObservabilityPipelineRenameFieldsProcessorField>",
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
        type: "ObservabilityPipelineRenameFieldsProcessorType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineRenameFieldsProcessor.js.map