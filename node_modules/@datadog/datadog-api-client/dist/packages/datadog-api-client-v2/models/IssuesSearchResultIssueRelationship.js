"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssuesSearchResultIssueRelationship = void 0;
/**
 * Relationship between the search result and the corresponding issue.
 */
class IssuesSearchResultIssueRelationship {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IssuesSearchResultIssueRelationship.attributeTypeMap;
    }
}
exports.IssuesSearchResultIssueRelationship = IssuesSearchResultIssueRelationship;
/**
 * @ignore
 */
IssuesSearchResultIssueRelationship.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "IssueReference",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IssuesSearchResultIssueRelationship.js.map