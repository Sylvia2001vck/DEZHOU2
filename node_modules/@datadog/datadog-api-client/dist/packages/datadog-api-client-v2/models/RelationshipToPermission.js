"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationshipToPermission = void 0;
/**
 * Relationship to a permissions object.
 */
class RelationshipToPermission {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RelationshipToPermission.attributeTypeMap;
    }
}
exports.RelationshipToPermission = RelationshipToPermission;
/**
 * @ignore
 */
RelationshipToPermission.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "RelationshipToPermissionData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RelationshipToPermission.js.map