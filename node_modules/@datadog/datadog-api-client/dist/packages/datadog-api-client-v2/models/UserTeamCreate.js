"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTeamCreate = void 0;
/**
 * A user's relationship with a team
 */
class UserTeamCreate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UserTeamCreate.attributeTypeMap;
    }
}
exports.UserTeamCreate = UserTeamCreate;
/**
 * @ignore
 */
UserTeamCreate.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "UserTeamAttributes",
    },
    relationships: {
        baseName: "relationships",
        type: "UserTeamRelationships",
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
//# sourceMappingURL=UserTeamCreate.js.map