"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineDatadogTagsProcessor = void 0;
/**
 * The `datadog_tags` processor includes or excludes specific Datadog tags in your logs.
 *
 * **Supported pipeline types:** logs
 */
class ObservabilityPipelineDatadogTagsProcessor {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineDatadogTagsProcessor.attributeTypeMap;
    }
}
exports.ObservabilityPipelineDatadogTagsProcessor = ObservabilityPipelineDatadogTagsProcessor;
/**
 * @ignore
 */
ObservabilityPipelineDatadogTagsProcessor.attributeTypeMap = {
    action: {
        baseName: "action",
        type: "ObservabilityPipelineDatadogTagsProcessorAction",
        required: true,
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
    keys: {
        baseName: "keys",
        type: "Array<string>",
        required: true,
    },
    mode: {
        baseName: "mode",
        type: "ObservabilityPipelineDatadogTagsProcessorMode",
        required: true,
    },
    type: {
        baseName: "type",
        type: "ObservabilityPipelineDatadogTagsProcessorType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineDatadogTagsProcessor.js.map