"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRelationships = void 0;
/**
 * Relationships of the user object.
 */
class UserRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UserRelationships.attributeTypeMap;
    }
}
exports.UserRelationships = UserRelationships;
/**
 * @ignore
 */
UserRelationships.attributeTypeMap = {
    roles: {
        baseName: "roles",
        type: "RelationshipToRoles",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UserRelationships.js.map