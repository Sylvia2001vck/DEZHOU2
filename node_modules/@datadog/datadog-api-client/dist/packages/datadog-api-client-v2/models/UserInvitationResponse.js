"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInvitationResponse = void 0;
/**
 * User invitation as returned by the API.
 */
class UserInvitationResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UserInvitationResponse.attributeTypeMap;
    }
}
exports.UserInvitationResponse = UserInvitationResponse;
/**
 * @ignore
 */
UserInvitationResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "UserInvitationResponseData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UserInvitationResponse.js.map