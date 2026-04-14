"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInvitationData = void 0;
/**
 * Object to create a user invitation.
 */
class UserInvitationData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UserInvitationData.attributeTypeMap;
    }
}
exports.UserInvitationData = UserInvitationData;
/**
 * @ignore
 */
UserInvitationData.attributeTypeMap = {
    relationships: {
        baseName: "relationships",
        type: "UserInvitationRelationships",
        required: true,
    },
    type: {
        baseName: "type",
        type: "UserInvitationsType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UserInvitationData.js.map