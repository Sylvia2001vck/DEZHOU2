"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInvitationsRequest = void 0;
/**
 * Object to invite users to join the organization.
 */
class UserInvitationsRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UserInvitationsRequest.attributeTypeMap;
    }
}
exports.UserInvitationsRequest = UserInvitationsRequest;
/**
 * @ignore
 */
UserInvitationsRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<UserInvitationData>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UserInvitationsRequest.js.map