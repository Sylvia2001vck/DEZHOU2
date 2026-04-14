"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueRelationships = void 0;
/**
 * Relationship between the issue and an assignee, case and/or teams.
 */
class IssueRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IssueRelationships.attributeTypeMap;
    }
}
exports.IssueRelationships = IssueRelationships;
/**
 * @ignore
 */
IssueRelationships.attributeTypeMap = {
    assignee: {
        baseName: "assignee",
        type: "IssueAssigneeRelationship",
    },
    _case: {
        baseName: "case",
        type: "IssueCaseRelationship",
    },
    teamOwners: {
        baseName: "team_owners",
        type: "IssueTeamOwnersRelationship",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IssueRelationships.js.map