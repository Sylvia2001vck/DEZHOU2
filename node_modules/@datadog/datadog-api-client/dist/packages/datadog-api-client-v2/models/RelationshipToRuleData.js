"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationshipToRuleData = void 0;
/**
 * Relationship data for a rule.
 */
class RelationshipToRuleData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RelationshipToRuleData.attributeTypeMap;
    }
}
exports.RelationshipToRuleData = RelationshipToRuleData;
/**
 * @ignore
 */
RelationshipToRuleData.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "RelationshipToRuleDataObject",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RelationshipToRuleData.js.map