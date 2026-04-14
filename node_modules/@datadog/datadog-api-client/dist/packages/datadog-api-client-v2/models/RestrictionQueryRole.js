"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestrictionQueryRole = void 0;
/**
 * Partial role object.
 */
class RestrictionQueryRole {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RestrictionQueryRole.attributeTypeMap;
    }
}
exports.RestrictionQueryRole = RestrictionQueryRole;
/**
 * @ignore
 */
RestrictionQueryRole.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "RestrictionQueryRoleAttribute",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
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
//# sourceMappingURL=RestrictionQueryRole.js.map