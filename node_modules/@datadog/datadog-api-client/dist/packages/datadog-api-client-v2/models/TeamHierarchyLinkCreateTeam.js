"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamHierarchyLinkCreateTeam = void 0;
/**
 * This schema defines the attributes about each team that has to be provided when creating a team hierarchy link
 */
class TeamHierarchyLinkCreateTeam {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamHierarchyLinkCreateTeam.attributeTypeMap;
    }
}
exports.TeamHierarchyLinkCreateTeam = TeamHierarchyLinkCreateTeam;
/**
 * @ignore
 */
TeamHierarchyLinkCreateTeam.attributeTypeMap = {
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
//# sourceMappingURL=TeamHierarchyLinkCreateTeam.js.map