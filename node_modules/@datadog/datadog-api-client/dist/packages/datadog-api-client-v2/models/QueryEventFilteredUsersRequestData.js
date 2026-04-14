"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryEventFilteredUsersRequestData = void 0;
class QueryEventFilteredUsersRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return QueryEventFilteredUsersRequestData.attributeTypeMap;
    }
}
exports.QueryEventFilteredUsersRequestData = QueryEventFilteredUsersRequestData;
/**
 * @ignore
 */
QueryEventFilteredUsersRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "QueryEventFilteredUsersRequestDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "QueryEventFilteredUsersRequestDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=QueryEventFilteredUsersRequestData.js.map