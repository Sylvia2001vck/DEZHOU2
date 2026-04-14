"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineReduceProcessor = void 0;
/**
 * The `reduce` processor aggregates and merges logs based on matching keys and merge strategies.
 *
 * **Supported pipeline types:** logs
 */
class ObservabilityPipelineReduceProcessor {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineReduceProcessor.attributeTypeMap;
    }
}
exports.ObservabilityPipelineReduceProcessor = ObservabilityPipelineReduceProcessor;
/**
 * @ignore
 */
ObservabilityPipelineReduceProcessor.attributeTypeMap = {
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
    mergeStrategies: {
        baseName: "merge_strategies",
        type: "Array<ObservabilityPipelineReduceProcessorMergeStrategy>",
        required: true,
    },
    type: {
        baseName: "type",
        type: "ObservabilityPipelineReduceProcessorType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineReduceProcessor.js.map