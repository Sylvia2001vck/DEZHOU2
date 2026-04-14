"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamRelationships = void 0;
/**
 * Resources related to a team
 */
class TeamRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamRelationships.attributeTypeMap;
    }
}
exports.TeamRelationships = TeamRelationships;
/**
 * @ignore
 */
TeamRelationships.attributeTypeMap = {
    teamLinks: {
        baseName: "team_links",
        type: "RelationshipToTeamLinks",
    },
    userTeamPermissions: {
        baseName: "user_team_permissions",
        type: "RelationshipToUserTeamPermission",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamRelationships.js.map