"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeRequestDecisionRelationships = void 0;
/**
 * Relationships of a change request decision.
 */
class ChangeRequestDecisionRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ChangeRequestDecisionRelationships.attributeTypeMap;
    }
}
exports.ChangeRequestDecisionRelationships = ChangeRequestDecisionRelationships;
/**
 * @ignore
 */
ChangeRequestDecisionRelationships.attributeTypeMap = {
    modifiedBy: {
        baseName: "modified_by",
        type: "ChangeRequestUserRelationship",
        required: true,
    },
    requestedByUser: {
        baseName: "requested_by_user",
        type: "ChangeRequestUserRelationship",
        required: true,
    },
    requestedUser: {
        baseName: "requested_user",
        type: "ChangeRequestUserRelationship",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ChangeRequestDecisionRelationships.js.map