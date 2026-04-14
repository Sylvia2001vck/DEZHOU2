"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAttributes = void 0;
/**
 * Attributes of user object returned by the API.
 */
class UserAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UserAttributes.attributeTypeMap;
    }
}
exports.UserAttributes = UserAttributes;
/**
 * @ignore
 */
UserAttributes.attributeTypeMap = {
    createdAt: {
        baseName: "created_at",
        type: "Date",
        format: "date-time",
    },
    disabled: {
        baseName: "disabled",
        type: "boolean",
    },
    email: {
        baseName: "email",
        type: "string",
    },
    handle: {
        baseName: "handle",
        type: "string",
    },
    icon: {
        baseName: "icon",
        type: "string",
    },
    lastLoginTime: {
        baseName: "last_login_time",
        type: "Date",
        format: "date-time",
    },
    mfaEnabled: {
        baseName: "mfa_enabled",
        type: "boolean",
    },
    modifiedAt: {
        baseName: "modified_at",
        type: "Date",
        format: "date-time",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    serviceAccount: {
        baseName: "service_account",
        type: "boolean",
    },
    status: {
        baseName: "status",
        type: "string",
    },
    title: {
        baseName: "title",
        type: "string",
    },
    verified: {
        baseName: "verified",
        type: "boolean",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UserAttributes.js.map