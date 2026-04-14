"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineQuotaProcessorOverride = void 0;
/**
 * Defines a custom quota limit that applies to specific log events based on matching field values.
 */
class ObservabilityPipelineQuotaProcessorOverride {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineQuotaProcessorOverride.attributeTypeMap;
    }
}
exports.ObservabilityPipelineQuotaProcessorOverride = ObservabilityPipelineQuotaProcessorOverride;
/**
 * @ignore
 */
ObservabilityPipelineQuotaProcessorOverride.attributeTypeMap = {
    fields: {
        baseName: "fields",
        type: "Array<ObservabilityPipelineFieldValue>",
        required: true,
    },
    limit: {
        baseName: "limit",
        type: "ObservabilityPipelineQuotaProcessorLimit",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineQuotaProcessorOverride.js.map