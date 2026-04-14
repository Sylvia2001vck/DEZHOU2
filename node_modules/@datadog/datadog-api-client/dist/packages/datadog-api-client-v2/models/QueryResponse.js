"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryResponse = void 0;
class QueryResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return QueryResponse.attributeTypeMap;
    }
}
exports.QueryResponse = QueryResponse;
/**
 * @ignore
 */
QueryResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "QueryResponseData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=QueryResponse.js.map