"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineCustomProcessor = void 0;
/**
 * The `custom_processor` processor transforms events using [Vector Remap Language (VRL)](https://vector.dev/docs/reference/vrl/) scripts with advanced filtering capabilities.
 *
 * **Supported pipeline types:** logs
 */
class ObservabilityPipelineCustomProcessor {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineCustomProcessor.attributeTypeMap;
    }
}
exports.ObservabilityPipelineCustomProcessor = ObservabilityPipelineCustomProcessor;
/**
 * @ignore
 */
ObservabilityPipelineCustomProcessor.attributeTypeMap = {
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
    remaps: {
        baseName: "remaps",
        type: "Array<ObservabilityPipelineCustomProcessorRemap>",
        required: true,
    },
    type: {
        baseName: "type",
        type: "ObservabilityPipelineCustomProcessorType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineCustomProcessor.js.map