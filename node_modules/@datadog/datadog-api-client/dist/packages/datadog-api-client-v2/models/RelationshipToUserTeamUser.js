"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationshipToUserTeamUser = void 0;
/**
 * Relationship between team membership and user
 */
class RelationshipToUserTeamUser {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RelationshipToUserTeamUser.attributeTypeMap;
    }
}
exports.RelationshipToUserTeamUser = RelationshipToUserTeamUser;
/**
 * @ignore
 */
RelationshipToUserTeamUser.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "RelationshipToUserTeamUserData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RelationshipToUserTeamUser.js.map