"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeRequestDecisionsRelationship = void 0;
/**
 * Relationship to change request decisions.
 */
class ChangeRequestDecisionsRelationship {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ChangeRequestDecisionsRelationship.attributeTypeMap;
    }
}
exports.ChangeRequestDecisionsRelationship = ChangeRequestDecisionsRelationship;
/**
 * @ignore
 */
ChangeRequestDecisionsRelationship.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<ChangeRequestDecisionRelationshipData>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ChangeRequestDecisionsRelationship.js.map