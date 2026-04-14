"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationshipToRuleDataObject = void 0;
/**
 * Rule relationship data.
 */
class RelationshipToRuleDataObject {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RelationshipToRuleDataObject.attributeTypeMap;
    }
}
exports.RelationshipToRuleDataObject = RelationshipToRuleDataObject;
/**
 * @ignore
 */
RelationshipToRuleDataObject.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "ScorecardType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RelationshipToRuleDataObject.js.map