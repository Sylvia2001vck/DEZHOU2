"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineReduceProcessorMergeStrategy = void 0;
/**
 * Defines how a specific field should be merged across grouped events.
 */
class ObservabilityPipelineReduceProcessorMergeStrategy {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineReduceProcessorMergeStrategy.attributeTypeMap;
    }
}
exports.ObservabilityPipelineReduceProcessorMergeStrategy = ObservabilityPipelineReduceProcessorMergeStrategy;
/**
 * @ignore
 */
ObservabilityPipelineReduceProcessorMergeStrategy.attributeTypeMap = {
    path: {
        baseName: "path",
        type: "string",
        required: true,
    },
    strategy: {
        baseName: "strategy",
        type: "ObservabilityPipelineReduceProcessorMergeStrategyStrategy",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineReduceProcessorMergeStrategy.js.map