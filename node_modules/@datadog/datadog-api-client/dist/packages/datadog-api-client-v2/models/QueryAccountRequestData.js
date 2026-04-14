"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryAccountRequestData = void 0;
class QueryAccountRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return QueryAccountRequestData.attributeTypeMap;
    }
}
exports.QueryAccountRequestData = QueryAccountRequestData;
/**
 * @ignore
 */
QueryAccountRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "QueryAccountRequestDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "QueryAccountRequestDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=QueryAccountRequestData.js.map