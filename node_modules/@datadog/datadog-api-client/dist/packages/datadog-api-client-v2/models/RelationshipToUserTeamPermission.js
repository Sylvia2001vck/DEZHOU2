"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationshipToUserTeamPermission = void 0;
/**
 * Relationship between a user team permission and a team
 */
class RelationshipToUserTeamPermission {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RelationshipToUserTeamPermission.attributeTypeMap;
    }
}
exports.RelationshipToUserTeamPermission = RelationshipToUserTeamPermission;
/**
 * @ignore
 */
RelationshipToUserTeamPermission.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "RelationshipToUserTeamPermissionData",
    },
    links: {
        baseName: "links",
        type: "TeamRelationshipsLinks",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RelationshipToUserTeamPermission.js.map