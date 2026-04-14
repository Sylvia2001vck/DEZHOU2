"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
/**
 * Role object returned by the API.
 */
class Role {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return Role.attributeTypeMap;
    }
}
exports.Role = Role;
/**
 * @ignore
 */
Role.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "RoleAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    relationships: {
        baseName: "relationships",
        type: "RoleResponseRelationships",
    },
    type: {
        baseName: "type",
        type: "RolesType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=Role.js.map