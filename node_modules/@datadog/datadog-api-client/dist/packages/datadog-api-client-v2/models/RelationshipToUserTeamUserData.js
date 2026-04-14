"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationshipToUserTeamUserData = void 0;
/**
 * A user's relationship with a team
 */
class RelationshipToUserTeamUserData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RelationshipToUserTeamUserData.attributeTypeMap;
    }
}
exports.RelationshipToUserTeamUserData = RelationshipToUserTeamUserData;
/**
 * @ignore
 */
RelationshipToUserTeamUserData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "UserTeamUserType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RelationshipToUserTeamUserData.js.map