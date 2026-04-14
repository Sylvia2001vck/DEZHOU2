"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueTeamReference = void 0;
/**
 * A team that owns the issue.
 */
class IssueTeamReference {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IssueTeamReference.attributeTypeMap;
    }
}
exports.IssueTeamReference = IssueTeamReference;
/**
 * @ignore
 */
IssueTeamReference.attributeTypeMap = {
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
//# sourceMappingURL=IssueTeamReference.js.map