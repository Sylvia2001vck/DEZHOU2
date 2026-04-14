"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationshipToTeamData = void 0;
/**
 * Relationship to Team object.
 */
class RelationshipToTeamData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RelationshipToTeamData.attributeTypeMap;
    }
}
exports.RelationshipToTeamData = RelationshipToTeamData;
/**
 * @ignore
 */
RelationshipToTeamData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "TeamType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RelationshipToTeamData.js.map