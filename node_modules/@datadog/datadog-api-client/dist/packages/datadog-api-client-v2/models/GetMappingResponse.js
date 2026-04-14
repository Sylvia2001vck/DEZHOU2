"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMappingResponse = void 0;
class GetMappingResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GetMappingResponse.attributeTypeMap;
    }
}
exports.GetMappingResponse = GetMappingResponse;
/**
 * @ignore
 */
GetMappingResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "GetMappingResponseData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GetMappingResponse.js.map