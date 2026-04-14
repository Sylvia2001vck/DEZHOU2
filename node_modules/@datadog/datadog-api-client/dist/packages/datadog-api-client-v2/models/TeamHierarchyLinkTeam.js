"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamHierarchyLinkTeam = void 0;
/**
 * Team hierarchy links connect different teams. This represents team objects that are connected by the team hierarchy link.
 */
class TeamHierarchyLinkTeam {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamHierarchyLinkTeam.attributeTypeMap;
    }
}
exports.TeamHierarchyLinkTeam = TeamHierarchyLinkTeam;
/**
 * @ignore
 */
TeamHierarchyLinkTeam.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "TeamHierarchyLinkTeamAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "TeamType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamHierarchyLinkTeam.js.map