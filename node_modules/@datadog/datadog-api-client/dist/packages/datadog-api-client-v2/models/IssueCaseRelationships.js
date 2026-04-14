"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueCaseRelationships = void 0;
/**
 * Resources related to a case.
 */
class IssueCaseRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IssueCaseRelationships.attributeTypeMap;
    }
}
exports.IssueCaseRelationships = IssueCaseRelationships;
/**
 * @ignore
 */
IssueCaseRelationships.attributeTypeMap = {
    assignee: {
        baseName: "assignee",
        type: "NullableUserRelationship",
    },
    createdBy: {
        baseName: "created_by",
        type: "NullableUserRelationship",
    },
    modifiedBy: {
        baseName: "modified_by",
        type: "NullableUserRelationship",
    },
    project: {
        baseName: "project",
        type: "ProjectRelationship",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IssueCaseRelationships.js.map