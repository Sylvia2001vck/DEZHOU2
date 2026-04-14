"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryEventFilteredUsersRequestDataAttributes = void 0;
class QueryEventFilteredUsersRequestDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return QueryEventFilteredUsersRequestDataAttributes.attributeTypeMap;
    }
}
exports.QueryEventFilteredUsersRequestDataAttributes = QueryEventFilteredUsersRequestDataAttributes;
/**
 * @ignore
 */
QueryEventFilteredUsersRequestDataAttributes.attributeTypeMap = {
    eventQuery: {
        baseName: "event_query",
        type: "QueryEventFilteredUsersRequestDataAttributesEventQuery",
    },
    includeRowCount: {
        baseName: "include_row_count",
        type: "boolean",
    },
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
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=QueryEventFilteredUsersRequestDataAttributes.js.map