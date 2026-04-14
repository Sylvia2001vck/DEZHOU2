"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberTeam = void 0;
/**
 * A member team
 */
class MemberTeam {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MemberTeam.attributeTypeMap;
    }
}
exports.MemberTeam = MemberTeam;
/**
 * @ignore
 */
MemberTeam.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "MemberTeamType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MemberTeam.js.map