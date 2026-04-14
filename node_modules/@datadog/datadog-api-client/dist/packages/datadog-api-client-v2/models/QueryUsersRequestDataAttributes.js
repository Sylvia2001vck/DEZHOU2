"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryUsersRequestDataAttributes = void 0;
class QueryUsersRequestDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return QueryUsersRequestDataAttributes.attributeTypeMap;
    }
}
exports.QueryUsersRequestDataAttributes = QueryUsersRequestDataAttributes;
/**
 * @ignore
 */
QueryUsersRequestDataAttributes.attributeTypeMap = {
    limit: {
        baseName: "limit",
        type: "number",
        format: "int64",
    },
    query: {
        baseName: "query",
        type: "string",
    },
    selectColumns: {
        baseName: "select_columns",
        type: "Array<string>",
    },
    sort: {
        baseName: "sort",
        type: "QueryUsersRequestDataAttributesSort",
    },
    wildcardSearchTerm: {
        baseName: "wildcard_search_term",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=QueryUsersRequestDataAttributes.js.map