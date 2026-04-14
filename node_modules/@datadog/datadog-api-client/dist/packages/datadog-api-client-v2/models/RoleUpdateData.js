"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleUpdateData = void 0;
/**
 * Data related to the update of a role.
 */
class RoleUpdateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RoleUpdateData.attributeTypeMap;
    }
}
exports.RoleUpdateData = RoleUpdateData;
/**
 * @ignore
 */
RoleUpdateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "RoleUpdateAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    relationships: {
        baseName: "relationships",
        type: "RoleRelationships",
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
//# sourceMappingURL=RoleUpdateData.js.map