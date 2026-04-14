"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Permission = void 0;
/**
 * Permission object.
 */
class Permission {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return Permission.attributeTypeMap;
    }
}
exports.Permission = Permission;
/**
 * @ignore
 */
Permission.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "PermissionAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "PermissionsType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=Permission.js.map