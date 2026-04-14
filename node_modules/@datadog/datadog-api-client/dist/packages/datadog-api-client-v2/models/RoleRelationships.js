"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleRelationships = void 0;
/**
 * Relationships of the role object.
 */
class RoleRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RoleRelationships.attributeTypeMap;
    }
}
exports.RoleRelationships = RoleRelationships;
/**
 * @ignore
 */
RoleRelationships.attributeTypeMap = {
    permissions: {
        baseName: "permissions",
        type: "RelationshipToPermissions",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RoleRelationships.js.map