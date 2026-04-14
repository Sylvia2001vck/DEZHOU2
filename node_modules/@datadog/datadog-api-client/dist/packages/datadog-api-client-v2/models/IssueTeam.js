"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueTeam = void 0;
/**
 * A team that owns an issue.
 */
class IssueTeam {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IssueTeam.attributeTypeMap;
    }
}
exports.IssueTeam = IssueTeam;
/**
 * @ignore
 */
IssueTeam.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "IssueTeamAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "IssueTeamType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IssueTeam.js.map