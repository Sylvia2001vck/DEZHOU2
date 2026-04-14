"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationshipToOutcome = void 0;
/**
 * The JSON:API relationship to a scorecard outcome.
 */
class RelationshipToOutcome {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RelationshipToOutcome.attributeTypeMap;
    }
}
exports.RelationshipToOutcome = RelationshipToOutcome;
/**
 * @ignore
 */
RelationshipToOutcome.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "RelationshipToOutcomeData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RelationshipToOutcome.js.map