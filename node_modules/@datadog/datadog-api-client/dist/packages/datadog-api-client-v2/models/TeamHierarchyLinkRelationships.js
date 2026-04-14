"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamHierarchyLinkRelationships = void 0;
/**
 * Team hierarchy link relationships
 */
class TeamHierarchyLinkRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamHierarchyLinkRelationships.attributeTypeMap;
    }
}
exports.TeamHierarchyLinkRelationships = TeamHierarchyLinkRelationships;
/**
 * @ignore
 */
TeamHierarchyLinkRelationships.attributeTypeMap = {
    parentTeam: {
        baseName: "parent_team",
        type: "TeamHierarchyLinkTeamRelationship",
        required: true,
    },
    subTeam: {
        baseName: "sub_team",
        type: "TeamHierarchyLinkTeamRelationship",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamHierarchyLinkRelationships.js.map