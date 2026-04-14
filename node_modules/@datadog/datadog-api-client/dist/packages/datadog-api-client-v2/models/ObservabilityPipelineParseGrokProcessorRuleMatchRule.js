"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineParseGrokProcessorRuleMatchRule = void 0;
/**
 * Defines a Grok parsing rule, which extracts structured fields from log content using named Grok patterns.
 * Each rule must have a unique name and a valid Datadog Grok pattern that will be applied to the source field.
 */
class ObservabilityPipelineParseGrokProcessorRuleMatchRule {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineParseGrokProcessorRuleMatchRule.attributeTypeMap;
    }
}
exports.ObservabilityPipelineParseGrokProcessorRuleMatchRule = ObservabilityPipelineParseGrokProcessorRuleMatchRule;
/**
 * @ignore
 */
ObservabilityPipelineParseGrokProcessorRuleMatchRule.attributeTypeMap = {
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    rule: {
        baseName: "rule",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineParseGrokProcessorRuleMatchRule.js.map