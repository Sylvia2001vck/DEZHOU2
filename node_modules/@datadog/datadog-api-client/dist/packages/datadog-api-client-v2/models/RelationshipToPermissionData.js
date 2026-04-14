"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationshipToPermissionData = void 0;
/**
 * Relationship to permission object.
 */
class RelationshipToPermissionData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RelationshipToPermissionData.attributeTypeMap;
    }
}
exports.RelationshipToPermissionData = RelationshipToPermissionData;
/**
 * @ignore
 */
RelationshipToPermissionData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "PermissionsType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RelationshipToPermissionData.js.map