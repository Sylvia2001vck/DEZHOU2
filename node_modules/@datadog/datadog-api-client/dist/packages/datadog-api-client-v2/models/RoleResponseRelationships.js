"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleResponseRelationships = void 0;
/**
 * Relationships of the role object returned by the API.
 */
class RoleResponseRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RoleResponseRelationships.attributeTypeMap;
    }
}
exports.RoleResponseRelationships = RoleResponseRelationships;
/**
 * @ignore
 */
RoleResponseRelationships.attributeTypeMap = {
    permissions: {
        baseName: "permissions",
        type: "RelationshipToPermissions",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RoleResponseRelationships.js.map