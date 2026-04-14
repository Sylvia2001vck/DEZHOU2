"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationshipToUserTeamTeam = void 0;
/**
 * Relationship between team membership and team
 */
class RelationshipToUserTeamTeam {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RelationshipToUserTeamTeam.attributeTypeMap;
    }
}
exports.RelationshipToUserTeamTeam = RelationshipToUserTeamTeam;
/**
 * @ignore
 */
RelationshipToUserTeamTeam.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "RelationshipToUserTeamTeamData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RelationshipToUserTeamTeam.js.map