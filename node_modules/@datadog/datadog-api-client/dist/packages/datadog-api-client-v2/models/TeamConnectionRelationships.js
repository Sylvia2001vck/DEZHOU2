"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamConnectionRelationships = void 0;
/**
 * Relationships of the team connection.
 */
class TeamConnectionRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamConnectionRelationships.attributeTypeMap;
    }
}
exports.TeamConnectionRelationships = TeamConnectionRelationships;
/**
 * @ignore
 */
TeamConnectionRelationships.attributeTypeMap = {
    connectedTeam: {
        baseName: "connected_team",
        type: "ConnectedTeamRef",
    },
    team: {
        baseName: "team",
        type: "TeamRef",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamConnectionRelationships.js.map