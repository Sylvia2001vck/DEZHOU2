"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuleOutcomeRelationships = void 0;
/**
 * The JSON:API relationship to a scorecard rule.
 */
class RuleOutcomeRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RuleOutcomeRelationships.attributeTypeMap;
    }
}
exports.RuleOutcomeRelationships = RuleOutcomeRelationships;
/**
 * @ignore
 */
RuleOutcomeRelationships.attributeTypeMap = {
    rule: {
        baseName: "rule",
        type: "RelationshipToOutcome",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RuleOutcomeRelationships.js.map