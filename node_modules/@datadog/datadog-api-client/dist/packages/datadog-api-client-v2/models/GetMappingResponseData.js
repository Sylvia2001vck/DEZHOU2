"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMappingResponseData = void 0;
class GetMappingResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GetMappingResponseData.attributeTypeMap;
    }
}
exports.GetMappingResponseData = GetMappingResponseData;
/**
 * @ignore
 */
GetMappingResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "GetMappingResponseDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "GetMappingResponseDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GetMappingResponseData.js.map