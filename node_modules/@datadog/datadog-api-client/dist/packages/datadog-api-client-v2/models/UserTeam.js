"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTeam = void 0;
/**
 * A user's relationship with a team
 */
class UserTeam {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UserTeam.attributeTypeMap;
    }
}
exports.UserTeam = UserTeam;
/**
 * @ignore
 */
UserTeam.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "UserTeamAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
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
//# sourceMappingURL=UserTeam.js.map