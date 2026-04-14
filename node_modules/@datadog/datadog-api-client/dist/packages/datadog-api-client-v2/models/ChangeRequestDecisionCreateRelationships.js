"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeRequestDecisionCreateRelationships = void 0;
/**
 * Relationships for creating a change request decision.
 */
class ChangeRequestDecisionCreateRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ChangeRequestDecisionCreateRelationships.attributeTypeMap;
    }
}
exports.ChangeRequestDecisionCreateRelationships = ChangeRequestDecisionCreateRelationships;
/**
 * @ignore
 */
ChangeRequestDecisionCreateRelationships.attributeTypeMap = {
    requestedUser: {
        baseName: "requested_user",
        type: "ChangeRequestUserRelationship",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ChangeRequestDecisionCreateRelationships.js.map