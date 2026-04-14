"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInvitationResponseData = void 0;
/**
 * Object of a user invitation returned by the API.
 */
class UserInvitationResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UserInvitationResponseData.attributeTypeMap;
    }
}
exports.UserInvitationResponseData = UserInvitationResponseData;
/**
 * @ignore
 */
UserInvitationResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "UserInvitationDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    relationships: {
        baseName: "relationships",
        type: "UserInvitationRelationships",
    },
    type: {
        baseName: "type",
        type: "UserInvitationsType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UserInvitationResponseData.js.map