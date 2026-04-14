"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSCloudAuthPersonaMappingResponse = void 0;
/**
 * Response containing a single AWS cloud authentication persona mapping
 */
class AWSCloudAuthPersonaMappingResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSCloudAuthPersonaMappingResponse.attributeTypeMap;
    }
}
exports.AWSCloudAuthPersonaMappingResponse = AWSCloudAuthPersonaMappingResponse;
/**
 * @ignore
 */
AWSCloudAuthPersonaMappingResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "AWSCloudAuthPersonaMappingDataResponse",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AWSCloudAuthPersonaMappingResponse.js.map