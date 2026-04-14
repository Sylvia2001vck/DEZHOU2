"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineSampleProcessor = void 0;
/**
 * The `sample` processor allows probabilistic sampling of logs at a fixed rate.
 *
 * **Supported pipeline types:** logs
 */
class ObservabilityPipelineSampleProcessor {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineSampleProcessor.attributeTypeMap;
    }
}
exports.ObservabilityPipelineSampleProcessor = ObservabilityPipelineSampleProcessor;
/**
 * @ignore
 */
ObservabilityPipelineSampleProcessor.attributeTypeMap = {
    displayName: {
        baseName: "display_name",
        type: "string",
    },
    enabled: {
        baseName: "enabled",
        type: "boolean",
        required: true,
    },
    groupBy: {
        baseName: "group_by",
        type: "Array<string>",
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
    percentage: {
        baseName: "percentage",
        type: "number",
        required: true,
        format: "double",
    },
    type: {
        baseName: "type",
        type: "ObservabilityPipelineSampleProcessorType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineSampleProcessor.js.map