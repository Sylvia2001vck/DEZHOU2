"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInvitationDataAttributes = void 0;
/**
 * Attributes of a user invitation.
 */
class UserInvitationDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UserInvitationDataAttributes.attributeTypeMap;
    }
}
exports.UserInvitationDataAttributes = UserInvitationDataAttributes;
/**
 * @ignore
 */
UserInvitationDataAttributes.attributeTypeMap = {
    createdAt: {
        baseName: "created_at",
        type: "Date",
        format: "date-time",
    },
    expiresAt: {
        baseName: "expires_at",
        type: "Date",
        format: "date-time",
    },
    inviteType: {
        baseName: "invite_type",
        type: "string",
    },
    uuid: {
        baseName: "uuid",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UserInvitationDataAttributes.js.map