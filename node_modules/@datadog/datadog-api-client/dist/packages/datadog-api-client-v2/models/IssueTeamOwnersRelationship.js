"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueTeamOwnersRelationship = void 0;
/**
 * Relationship between the issue and teams.
 */
class IssueTeamOwnersRelationship {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IssueTeamOwnersRelationship.attributeTypeMap;
    }
}
exports.IssueTeamOwnersRelationship = IssueTeamOwnersRelationship;
/**
 * @ignore
 */
IssueTeamOwnersRelationship.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<IssueTeamReference>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IssueTeamOwnersRelationship.js.map