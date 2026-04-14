"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationshipToOutcomeData = void 0;
/**
 * The JSON:API relationship to an outcome, which returns the related rule id.
 */
class RelationshipToOutcomeData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RelationshipToOutcomeData.attributeTypeMap;
    }
}
exports.RelationshipToOutcomeData = RelationshipToOutcomeData;
/**
 * @ignore
 */
RelationshipToOutcomeData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "RuleType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RelationshipToOutcomeData.js.map