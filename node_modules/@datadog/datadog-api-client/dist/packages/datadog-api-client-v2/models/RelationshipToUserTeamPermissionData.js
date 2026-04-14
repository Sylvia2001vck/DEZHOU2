"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationshipToUserTeamPermissionData = void 0;
/**
 * Related user team permission data
 */
class RelationshipToUserTeamPermissionData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RelationshipToUserTeamPermissionData.attributeTypeMap;
    }
}
exports.RelationshipToUserTeamPermissionData = RelationshipToUserTeamPermissionData;
/**
 * @ignore
 */
RelationshipToUserTeamPermissionData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "UserTeamPermissionType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RelationshipToUserTeamPermissionData.js.map