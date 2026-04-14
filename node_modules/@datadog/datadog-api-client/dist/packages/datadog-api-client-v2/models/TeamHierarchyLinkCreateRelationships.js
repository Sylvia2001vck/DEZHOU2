"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamHierarchyLinkCreateRelationships = void 0;
/**
 * The related teams that will be connected by the team hierarchy link
 */
class TeamHierarchyLinkCreateRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamHierarchyLinkCreateRelationships.attributeTypeMap;
    }
}
exports.TeamHierarchyLinkCreateRelationships = TeamHierarchyLinkCreateRelationships;
/**
 * @ignore
 */
TeamHierarchyLinkCreateRelationships.attributeTypeMap = {
    parentTeam: {
        baseName: "parent_team",
        type: "TeamHierarchyLinkCreateTeamRelationship",
        required: true,
    },
    subTeam: {
        baseName: "sub_team",
        type: "TeamHierarchyLinkCreateTeamRelationship",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamHierarchyLinkCreateRelationships.js.map