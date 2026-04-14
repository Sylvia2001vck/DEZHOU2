"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineMetricTagsProcessorRule = void 0;
/**
 * Defines a rule for filtering metric tags based on key patterns.
 */
class ObservabilityPipelineMetricTagsProcessorRule {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineMetricTagsProcessorRule.attributeTypeMap;
    }
}
exports.ObservabilityPipelineMetricTagsProcessorRule = ObservabilityPipelineMetricTagsProcessorRule;
/**
 * @ignore
 */
ObservabilityPipelineMetricTagsProcessorRule.attributeTypeMap = {
    action: {
        baseName: "action",
        type: "ObservabilityPipelineMetricTagsProcessorRuleAction",
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
        type: "ObservabilityPipelineMetricTagsProcessorRuleMode",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineMetricTagsProcessorRule.js.map