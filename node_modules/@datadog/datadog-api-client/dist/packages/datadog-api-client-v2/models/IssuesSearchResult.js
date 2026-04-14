"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssuesSearchResult = void 0;
/**
 * Result matching the search query.
 */
class IssuesSearchResult {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IssuesSearchResult.attributeTypeMap;
    }
}
exports.IssuesSearchResult = IssuesSearchResult;
/**
 * @ignore
 */
IssuesSearchResult.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "IssuesSearchResultAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    relationships: {
        baseName: "relationships",
        type: "IssuesSearchResultRelationships",
    },
    type: {
        baseName: "type",
        type: "IssuesSearchResultType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IssuesSearchResult.js.map