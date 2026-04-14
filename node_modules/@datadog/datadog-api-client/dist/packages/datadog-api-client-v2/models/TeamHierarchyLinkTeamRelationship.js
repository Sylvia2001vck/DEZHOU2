"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamHierarchyLinkTeamRelationship = void 0;
/**
 * Team hierarchy link team relationship
 */
class TeamHierarchyLinkTeamRelationship {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamHierarchyLinkTeamRelationship.attributeTypeMap;
    }
}
exports.TeamHierarchyLinkTeamRelationship = TeamHierarchyLinkTeamRelationship;
/**
 * @ignore
 */
TeamHierarchyLinkTeamRelationship.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "TeamHierarchyLinkTeam",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamHierarchyLinkTeamRelationship.js.map