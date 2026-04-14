"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryUsersRequestData = void 0;
class QueryUsersRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return QueryUsersRequestData.attributeTypeMap;
    }
}
exports.QueryUsersRequestData = QueryUsersRequestData;
/**
 * @ignore
 */
QueryUsersRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "QueryUsersRequestDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "QueryUsersRequestDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=QueryUsersRequestData.js.map