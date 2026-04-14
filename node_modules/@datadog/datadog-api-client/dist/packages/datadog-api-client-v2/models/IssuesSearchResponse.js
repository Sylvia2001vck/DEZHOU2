"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssuesSearchResponse = void 0;
/**
 * Search issues response payload.
 */
class IssuesSearchResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IssuesSearchResponse.attributeTypeMap;
    }
}
exports.IssuesSearchResponse = IssuesSearchResponse;
/**
 * @ignore
 */
IssuesSearchResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<IssuesSearchResult>",
    },
    included: {
        baseName: "included",
        type: "Array<IssuesSearchResultIncluded>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IssuesSearchResponse.js.map