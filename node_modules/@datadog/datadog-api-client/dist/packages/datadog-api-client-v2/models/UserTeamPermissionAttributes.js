"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTeamPermissionAttributes = void 0;
/**
 * User team permission attributes
 */
class UserTeamPermissionAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UserTeamPermissionAttributes.attributeTypeMap;
    }
}
exports.UserTeamPermissionAttributes = UserTeamPermissionAttributes;
/**
 * @ignore
 */
UserTeamPermissionAttributes.attributeTypeMap = {
    permissions: {
        baseName: "permissions",
        type: "any",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UserTeamPermissionAttributes.js.map