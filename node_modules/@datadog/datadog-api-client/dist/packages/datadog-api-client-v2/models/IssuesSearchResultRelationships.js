"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssuesSearchResultRelationships = void 0;
/**
 * Relationships between the search result and other resources.
 */
class IssuesSearchResultRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IssuesSearchResultRelationships.attributeTypeMap;
    }
}
exports.IssuesSearchResultRelationships = IssuesSearchResultRelationships;
/**
 * @ignore
 */
IssuesSearchResultRelationships.attributeTypeMap = {
    issue: {
        baseName: "issue",
        type: "IssuesSearchResultIssueRelationship",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IssuesSearchResultRelationships.js.map