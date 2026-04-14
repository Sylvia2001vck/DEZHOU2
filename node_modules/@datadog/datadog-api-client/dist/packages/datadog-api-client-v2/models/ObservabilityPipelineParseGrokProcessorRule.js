"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineParseGrokProcessorRule = void 0;
/**
 * A Grok parsing rule used in the `parse_grok` processor. Each rule defines how to extract structured fields
 * from a specific log field using Grok patterns.
 */
class ObservabilityPipelineParseGrokProcessorRule {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineParseGrokProcessorRule.attributeTypeMap;
    }
}
exports.ObservabilityPipelineParseGrokProcessorRule = ObservabilityPipelineParseGrokProcessorRule;
/**
 * @ignore
 */
ObservabilityPipelineParseGrokProcessorRule.attributeTypeMap = {
    matchRules: {
        baseName: "match_rules",
        type: "Array<ObservabilityPipelineParseGrokProcessorRuleMatchRule>",
        required: true,
    },
    source: {
        baseName: "source",
        type: "string",
        required: true,
    },
    supportRules: {
        baseName: "support_rules",
        type: "Array<ObservabilityPipelineParseGrokProcessorRuleSupportRule>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineParseGrokProcessorRule.js.map