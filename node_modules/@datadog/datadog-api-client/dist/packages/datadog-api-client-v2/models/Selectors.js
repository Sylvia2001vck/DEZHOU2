"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Selectors = void 0;
/**
 * Selectors are used to filter security issues for which notifications should be generated.
 * Users can specify rule severities, rule types, a query to filter security issues on tags and attributes, and the trigger source.
 * Only the trigger_source field is required.
 */
class Selectors {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return Selectors.attributeTypeMap;
    }
}
exports.Selectors = Selectors;
/**
 * @ignore
 */
Selectors.attributeTypeMap = {
    query: {
        baseName: "query",
        type: "string",
    },
    ruleTypes: {
        baseName: "rule_types",
        type: "Array<RuleTypesItems>",
    },
    severities: {
        baseName: "severities",
        type: "Array<RuleSeverity>",
    },
    triggerSource: {
        baseName: "trigger_source",
        type: "TriggerSource",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=Selectors.js.map