"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryAccountRequestDataAttributes = void 0;
class QueryAccountRequestDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return QueryAccountRequestDataAttributes.attributeTypeMap;
    }
}
exports.QueryAccountRequestDataAttributes = QueryAccountRequestDataAttributes;
/**
 * @ignore
 */
QueryAccountRequestDataAttributes.attributeTypeMap = {
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
        type: "QueryAccountRequestDataAttributesSort",
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
//# sourceMappingURL=QueryAccountRequestDataAttributes.js.map