"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeRequestDecisionUpdateDataRelationships = void 0;
/**
 * Relationships for updating a change request decision.
 */
class ChangeRequestDecisionUpdateDataRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ChangeRequestDecisionUpdateDataRelationships.attributeTypeMap;
    }
}
exports.ChangeRequestDecisionUpdateDataRelationships = ChangeRequestDecisionUpdateDataRelationships;
/**
 * @ignore
 */
ChangeRequestDecisionUpdateDataRelationships.attributeTypeMap = {
    changeRequestDecisions: {
        baseName: "change_request_decisions",
        type: "ChangeRequestDecisionsRelationship",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ChangeRequestDecisionUpdateDataRelationships.js.map