"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationshipToUserTeamTeamData = void 0;
/**
 * The team associated with the membership
 */
class RelationshipToUserTeamTeamData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RelationshipToUserTeamTeamData.attributeTypeMap;
    }
}
exports.RelationshipToUserTeamTeamData = RelationshipToUserTeamTeamData;
/**
 * @ignore
 */
RelationshipToUserTeamTeamData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "UserTeamTeamType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RelationshipToUserTeamTeamData.js.map