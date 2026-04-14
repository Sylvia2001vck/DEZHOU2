"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTeamsResponse = void 0;
/**
 * Team memberships response
 */
class UserTeamsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UserTeamsResponse.attributeTypeMap;
    }
}
exports.UserTeamsResponse = UserTeamsResponse;
/**
 * @ignore
 */
UserTeamsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<UserTeam>",
    },
    included: {
        baseName: "included",
        type: "Array<UserTeamIncluded>",
    },
    links: {
        baseName: "links",
        type: "TeamsResponseLinks",
    },
    meta: {
        baseName: "meta",
        type: "TeamsResponseMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UserTeamsResponse.js.map