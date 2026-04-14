"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationshipToRoles = void 0;
/**
 * Relationship to roles.
 */
class RelationshipToRoles {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RelationshipToRoles.attributeTypeMap;
    }
}
exports.RelationshipToRoles = RelationshipToRoles;
/**
 * @ignore
 */
RelationshipToRoles.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<RelationshipToRoleData>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RelationshipToRoles.js.map