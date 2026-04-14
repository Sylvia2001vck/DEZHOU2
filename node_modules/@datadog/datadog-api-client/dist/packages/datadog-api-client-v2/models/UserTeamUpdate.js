"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTeamUpdate = void 0;
/**
 * A user's relationship with a team
 */
class UserTeamUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UserTeamUpdate.attributeTypeMap;
    }
}
exports.UserTeamUpdate = UserTeamUpdate;
/**
 * @ignore
 */
UserTeamUpdate.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "UserTeamAttributes",
    },
    type: {
        baseName: "type",
        type: "UserTeamType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UserTeamUpdate.js.map