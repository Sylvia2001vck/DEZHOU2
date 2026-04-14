"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTeamPermission = void 0;
/**
 * A user's permissions for a given team
 */
class UserTeamPermission {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UserTeamPermission.attributeTypeMap;
    }
}
exports.UserTeamPermission = UserTeamPermission;
/**
 * @ignore
 */
UserTeamPermission.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "UserTeamPermissionAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "UserTeamPermissionType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UserTeamPermission.js.map