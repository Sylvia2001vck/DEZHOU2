"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Issue = void 0;
/**
 * The issue matching the request.
 */
class Issue {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return Issue.attributeTypeMap;
    }
}
exports.Issue = Issue;
/**
 * @ignore
 */
Issue.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "IssueAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    relationships: {
        baseName: "relationships",
        type: "IssueRelationships",
    },
    type: {
        baseName: "type",
        type: "IssueType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=Issue.js.map