"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationshipToRoleData = void 0;
/**
 * Relationship to role object.
 */
class RelationshipToRoleData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RelationshipToRoleData.attributeTypeMap;
    }
}
exports.RelationshipToRoleData = RelationshipToRoleData;
/**
 * @ignore
 */
RelationshipToRoleData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
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
//# sourceMappingURL=RelationshipToRoleData.js.map