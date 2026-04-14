"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamUpdateRelationships = void 0;
/**
 * Team update relationships
 */
class TeamUpdateRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamUpdateRelationships.attributeTypeMap;
    }
}
exports.TeamUpdateRelationships = TeamUpdateRelationships;
/**
 * @ignore
 */
TeamUpdateRelationships.attributeTypeMap = {
    teamLinks: {
        baseName: "team_links",
        type: "RelationshipToTeamLinks",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamUpdateRelationships.js.map