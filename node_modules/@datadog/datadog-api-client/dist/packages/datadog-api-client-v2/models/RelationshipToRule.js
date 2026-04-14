"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationshipToRule = void 0;
/**
 * Scorecard create rule response relationship.
 */
class RelationshipToRule {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RelationshipToRule.attributeTypeMap;
    }
}
exports.RelationshipToRule = RelationshipToRule;
/**
 * @ignore
 */
RelationshipToRule.attributeTypeMap = {
    scorecard: {
        baseName: "scorecard",
        type: "RelationshipToRuleData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RelationshipToRule.js.map