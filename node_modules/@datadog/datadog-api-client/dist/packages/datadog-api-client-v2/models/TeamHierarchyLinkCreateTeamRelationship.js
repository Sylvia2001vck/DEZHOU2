"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamHierarchyLinkCreateTeamRelationship = void 0;
/**
 * Data about each team that will be connected by the team hierarchy link
 */
class TeamHierarchyLinkCreateTeamRelationship {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamHierarchyLinkCreateTeamRelationship.attributeTypeMap;
    }
}
exports.TeamHierarchyLinkCreateTeamRelationship = TeamHierarchyLinkCreateTeamRelationship;
/**
 * @ignore
 */
TeamHierarchyLinkCreateTeamRelationship.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "TeamHierarchyLinkCreateTeam",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamHierarchyLinkCreateTeamRelationship.js.map