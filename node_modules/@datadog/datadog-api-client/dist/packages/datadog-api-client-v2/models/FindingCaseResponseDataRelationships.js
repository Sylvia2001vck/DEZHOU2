"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindingCaseResponseDataRelationships = void 0;
/**
 * Relationships of the case.
 */
class FindingCaseResponseDataRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FindingCaseResponseDataRelationships.attributeTypeMap;
    }
}
exports.FindingCaseResponseDataRelationships = FindingCaseResponseDataRelationships;
/**
 * @ignore
 */
FindingCaseResponseDataRelationships.attributeTypeMap = {
    createdBy: {
        baseName: "created_by",
        type: "RelationshipToUser",
    },
    modifiedBy: {
        baseName: "modified_by",
        type: "RelationshipToUser",
    },
    project: {
        baseName: "project",
        type: "CaseManagementProject",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FindingCaseResponseDataRelationships.js.map