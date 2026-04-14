"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryEventFilteredUsersRequestDataAttributesEventQuery = void 0;
class QueryEventFilteredUsersRequestDataAttributesEventQuery {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return QueryEventFilteredUsersRequestDataAttributesEventQuery.attributeTypeMap;
    }
}
exports.QueryEventFilteredUsersRequestDataAttributesEventQuery = QueryEventFilteredUsersRequestDataAttributesEventQuery;
/**
 * @ignore
 */
QueryEventFilteredUsersRequestDataAttributesEventQuery.attributeTypeMap = {
    query: {
        baseName: "query",
        type: "string",
    },
    timeFrame: {
        baseName: "time_frame",
        type: "QueryEventFilteredUsersRequestDataAttributesEventQueryTimeFrame",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=QueryEventFilteredUsersRequestDataAttributesEventQuery.js.map