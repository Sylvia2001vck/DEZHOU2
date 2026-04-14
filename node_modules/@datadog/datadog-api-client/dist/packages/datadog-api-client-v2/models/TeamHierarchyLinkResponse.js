"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamHierarchyLinkResponse = void 0;
/**
 * Team hierarchy link response
 */
class TeamHierarchyLinkResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamHierarchyLinkResponse.attributeTypeMap;
    }
}
exports.TeamHierarchyLinkResponse = TeamHierarchyLinkResponse;
/**
 * @ignore
 */
TeamHierarchyLinkResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "TeamHierarchyLink",
    },
    included: {
        baseName: "included",
        type: "Array<TeamHierarchyLinkTeam>",
    },
    links: {
        baseName: "links",
        type: "TeamsHierarchyLinksResponseLinks",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamHierarchyLinkResponse.js.map