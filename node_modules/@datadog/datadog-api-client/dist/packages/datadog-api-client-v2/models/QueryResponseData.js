"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryResponseData = void 0;
class QueryResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return QueryResponseData.attributeTypeMap;
    }
}
exports.QueryResponseData = QueryResponseData;
/**
 * @ignore
 */
QueryResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "QueryResponseDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "QueryResponseDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=QueryResponseData.js.map