"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInvitationsResponse = void 0;
/**
 * User invitations as returned by the API.
 */
class UserInvitationsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UserInvitationsResponse.attributeTypeMap;
    }
}
exports.UserInvitationsResponse = UserInvitationsResponse;
/**
 * @ignore
 */
UserInvitationsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<UserInvitationResponseData>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UserInvitationsResponse.js.map