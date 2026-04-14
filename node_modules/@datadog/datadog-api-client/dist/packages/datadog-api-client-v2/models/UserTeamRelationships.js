"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTeamRelationships = void 0;
/**
 * Relationship between membership and a user
 */
class UserTeamRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UserTeamRelationships.attributeTypeMap;
    }
}
exports.UserTeamRelationships = UserTeamRelationships;
/**
 * @ignore
 */
UserTeamRelationships.attributeTypeMap = {
    team: {
        baseName: "team",
        type: "RelationshipToUserTeamTeam",
    },
    user: {
        baseName: "user",
        type: "RelationshipToUserTeamUser",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UserTeamRelationships.js.map