"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationshipToTeamLinks = void 0;
/**
 * Relationship between a team and a team link
 */
class RelationshipToTeamLinks {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RelationshipToTeamLinks.attributeTypeMap;
    }
}
exports.RelationshipToTeamLinks = RelationshipToTeamLinks;
/**
 * @ignore
 */
RelationshipToTeamLinks.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<RelationshipToTeamLinkData>",
    },
    links: {
        baseName: "links",
        type: "TeamRelationshipsLinks",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RelationshipToTeamLinks.js.map