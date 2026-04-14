"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationshipToTeamLinkData = void 0;
/**
 * Relationship between a link and a team
 */
class RelationshipToTeamLinkData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RelationshipToTeamLinkData.attributeTypeMap;
    }
}
exports.RelationshipToTeamLinkData = RelationshipToTeamLinkData;
/**
 * @ignore
 */
RelationshipToTeamLinkData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "TeamLinkType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RelationshipToTeamLinkData.js.map