"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineQuotaProcessorLimit = void 0;
/**
 * The maximum amount of data or number of events allowed before the quota is enforced. Can be specified in bytes or events.
 */
class ObservabilityPipelineQuotaProcessorLimit {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineQuotaProcessorLimit.attributeTypeMap;
    }
}
exports.ObservabilityPipelineQuotaProcessorLimit = ObservabilityPipelineQuotaProcessorLimit;
/**
 * @ignore
 */
ObservabilityPipelineQuotaProcessorLimit.attributeTypeMap = {
    enforce: {
        baseName: "enforce",
        type: "ObservabilityPipelineQuotaProcessorLimitEnforceType",
        required: true,
    },
    limit: {
        baseName: "limit",
        type: "number",
        required: true,
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineQuotaProcessorLimit.js.map