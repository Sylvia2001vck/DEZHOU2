"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryAccountRequest = void 0;
class QueryAccountRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return QueryAccountRequest.attributeTypeMap;
    }
}
exports.QueryAccountRequest = QueryAccountRequest;
/**
 * @ignore
 */
QueryAccountRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "QueryAccountRequestData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=QueryAccountRequest.js.map