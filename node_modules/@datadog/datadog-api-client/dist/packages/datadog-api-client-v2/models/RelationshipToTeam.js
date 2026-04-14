"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationshipToTeam = void 0;
/**
 * Relationship to team.
 */
class RelationshipToTeam {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RelationshipToTeam.attributeTypeMap;
    }
}
exports.RelationshipToTeam = RelationshipToTeam;
/**
 * @ignore
 */
RelationshipToTeam.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "RelationshipToTeamData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RelationshipToTeam.js.map