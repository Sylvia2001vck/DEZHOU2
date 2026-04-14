"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleCreateData = void 0;
/**
 * Data related to the creation of a role.
 */
class RoleCreateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RoleCreateData.attributeTypeMap;
    }
}
exports.RoleCreateData = RoleCreateData;
/**
 * @ignore
 */
RoleCreateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "RoleCreateAttributes",
        required: true,
    },
    relationships: {
        baseName: "relationships",
        type: "RoleRelationships",
    },
    type: {
        baseName: "type",
        type: "RolesType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RoleCreateData.js.map