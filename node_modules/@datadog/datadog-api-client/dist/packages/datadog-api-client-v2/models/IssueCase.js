"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueCase = void 0;
/**
 * The case attached to the issue.
 */
class IssueCase {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IssueCase.attributeTypeMap;
    }
}
exports.IssueCase = IssueCase;
/**
 * @ignore
 */
IssueCase.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "IssueCaseAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    relationships: {
        baseName: "relationships",
        type: "IssueCaseRelationships",
    },
    type: {
        baseName: "type",
        type: "IssueCaseResourceType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IssueCase.js.map