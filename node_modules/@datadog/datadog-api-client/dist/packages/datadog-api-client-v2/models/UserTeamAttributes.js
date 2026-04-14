"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTeamAttributes = void 0;
/**
 * Team membership attributes
 */
class UserTeamAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UserTeamAttributes.attributeTypeMap;
    }
}
exports.UserTeamAttributes = UserTeamAttributes;
/**
 * @ignore
 */
UserTeamAttributes.attributeTypeMap = {
    provisionedBy: {
        baseName: "provisioned_by",
        type: "string",
    },
    provisionedById: {
        baseName: "provisioned_by_id",
        type: "string",
    },
    role: {
        baseName: "role",
        type: "UserTeamRole",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UserTeamAttributes.js.map