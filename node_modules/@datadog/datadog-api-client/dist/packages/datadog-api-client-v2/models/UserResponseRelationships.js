"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResponseRelationships = void 0;
/**
 * Relationships of the user object returned by the API.
 */
class UserResponseRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UserResponseRelationships.attributeTypeMap;
    }
}
exports.UserResponseRelationships = UserResponseRelationships;
/**
 * @ignore
 */
UserResponseRelationships.attributeTypeMap = {
    org: {
        baseName: "org",
        type: "RelationshipToOrganization",
    },
    otherOrgs: {
        baseName: "other_orgs",
        type: "RelationshipToOrganizations",
    },
    otherUsers: {
        baseName: "other_users",
        type: "RelationshipToUsers",
    },
    roles: {
        baseName: "roles",
        type: "RelationshipToRoles",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UserResponseRelationships.js.map