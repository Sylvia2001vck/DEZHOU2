"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationshipToPermissions = void 0;
/**
 * Relationship to multiple permissions objects.
 */
class RelationshipToPermissions {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RelationshipToPermissions.attributeTypeMap;
    }
}
exports.RelationshipToPermissions = RelationshipToPermissions;
/**
 * @ignore
 */
RelationshipToPermissions.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<RelationshipToPermissionData>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RelationshipToPermissions.js.map