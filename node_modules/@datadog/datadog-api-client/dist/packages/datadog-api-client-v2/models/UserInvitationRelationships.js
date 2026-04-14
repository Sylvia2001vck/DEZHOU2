"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInvitationRelationships = void 0;
/**
 * Relationships data for user invitation.
 */
class UserInvitationRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UserInvitationRelationships.attributeTypeMap;
    }
}
exports.UserInvitationRelationships = UserInvitationRelationships;
/**
 * @ignore
 */
UserInvitationRelationships.attributeTypeMap = {
    user: {
        baseName: "user",
        type: "RelationshipToUser",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UserInvitationRelationships.js.map