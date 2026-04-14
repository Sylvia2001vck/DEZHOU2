"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamHierarchyLinksResponse = void 0;
/**
 * Team hierarchy links response
 */
class TeamHierarchyLinksResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamHierarchyLinksResponse.attributeTypeMap;
    }
}
exports.TeamHierarchyLinksResponse = TeamHierarchyLinksResponse;
/**
 * @ignore
 */
TeamHierarchyLinksResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<TeamHierarchyLink>",
    },
    included: {
        baseName: "included",
        type: "Array<TeamHierarchyLinkTeam>",
    },
    links: {
        baseName: "links",
        type: "TeamsHierarchyLinksResponseLinks",
    },
    meta: {
        baseName: "meta",
        type: "TeamsHierarchyLinksResponseMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamHierarchyLinksResponse.js.map