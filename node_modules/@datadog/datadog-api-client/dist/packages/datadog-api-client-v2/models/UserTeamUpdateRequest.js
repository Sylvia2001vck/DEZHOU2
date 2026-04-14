"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTeamUpdateRequest = void 0;
/**
 * Team membership request
 */
class UserTeamUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UserTeamUpdateRequest.attributeTypeMap;
    }
}
exports.UserTeamUpdateRequest = UserTeamUpdateRequest;
/**
 * @ignore
 */
UserTeamUpdateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "UserTeamUpdate",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UserTeamUpdateRequest.js.map