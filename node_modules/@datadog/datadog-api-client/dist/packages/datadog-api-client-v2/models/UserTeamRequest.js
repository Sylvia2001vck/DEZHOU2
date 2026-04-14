"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTeamRequest = void 0;
/**
 * Team membership request
 */
class UserTeamRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UserTeamRequest.attributeTypeMap;
    }
}
exports.UserTeamRequest = UserTeamRequest;
/**
 * @ignore
 */
UserTeamRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "UserTeamCreate",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UserTeamRequest.js.map