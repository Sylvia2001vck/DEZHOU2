"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDataDeletionsResponseBody = void 0;
/**
 * The response from the get data deletion requests endpoint.
 */
class GetDataDeletionsResponseBody {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GetDataDeletionsResponseBody.attributeTypeMap;
    }
}
exports.GetDataDeletionsResponseBody = GetDataDeletionsResponseBody;
/**
 * @ignore
 */
GetDataDeletionsResponseBody.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<DataDeletionResponseItem>",
    },
    meta: {
        baseName: "meta",
        type: "DataDeletionResponseMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GetDataDeletionsResponseBody.js.map