"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTeamResponse = void 0;
/**
 * Team membership response
 */
class UserTeamResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UserTeamResponse.attributeTypeMap;
    }
}
exports.UserTeamResponse = UserTeamResponse;
/**
 * @ignore
 */
UserTeamResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "UserTeam",
    },
    included: {
        baseName: "included",
        type: "Array<UserTeamIncluded>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UserTeamResponse.js.map