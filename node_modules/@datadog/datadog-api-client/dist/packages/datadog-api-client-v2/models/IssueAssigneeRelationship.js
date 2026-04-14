"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueAssigneeRelationship = void 0;
/**
 * Relationship between the issue and assignee.
 */
class IssueAssigneeRelationship {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IssueAssigneeRelationship.attributeTypeMap;
    }
}
exports.IssueAssigneeRelationship = IssueAssigneeRelationship;
/**
 * @ignore
 */
IssueAssigneeRelationship.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "IssueUserReference",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IssueAssigneeRelationship.js.map