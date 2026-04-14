"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineQuotaProcessor = void 0;
/**
 * The `quota` processor measures logging traffic for logs that match a specified filter. When the configured daily quota is met, the processor can drop or alert.
 *
 * **Supported pipeline types:** logs
 */
class ObservabilityPipelineQuotaProcessor {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineQuotaProcessor.attributeTypeMap;
    }
}
exports.ObservabilityPipelineQuotaProcessor = ObservabilityPipelineQuotaProcessor;
/**
 * @ignore
 */
ObservabilityPipelineQuotaProcessor.attributeTypeMap = {
    displayName: {
        baseName: "display_name",
        type: "string",
    },
    dropEvents: {
        baseName: "drop_events",
        type: "boolean",
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
    ignoreWhenMissingPartitions: {
        baseName: "ignore_when_missing_partitions",
        type: "boolean",
    },
    include: {
        baseName: "include",
        type: "string",
        required: true,
    },
    limit: {
        baseName: "limit",
        type: "ObservabilityPipelineQuotaProcessorLimit",
        required: true,
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    overflowAction: {
        baseName: "overflow_action",
        type: "ObservabilityPipelineQuotaProcessorOverflowAction",
    },
    overrides: {
        baseName: "overrides",
        type: "Array<ObservabilityPipelineQuotaProcessorOverride>",
    },
    partitionFields: {
        baseName: "partition_fields",
        type: "Array<string>",
    },
    tooManyBucketsAction: {
        baseName: "too_many_buckets_action",
        type: "ObservabilityPipelineQuotaProcessorOverflowAction",
    },
    type: {
        baseName: "type",
        type: "ObservabilityPipelineQuotaProcessorType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineQuotaProcessor.js.map