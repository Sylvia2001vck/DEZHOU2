"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSCloudAuthPersonaMappingsResponse = void 0;
/**
 * Response containing a list of AWS cloud authentication persona mappings
 */
class AWSCloudAuthPersonaMappingsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSCloudAuthPersonaMappingsResponse.attributeTypeMap;
    }
}
exports.AWSCloudAuthPersonaMappingsResponse = AWSCloudAuthPersonaMappingsResponse;
/**
 * @ignore
 */
AWSCloudAuthPersonaMappingsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<AWSCloudAuthPersonaMappingDataResponse>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AWSCloudAuthPersonaMappingsResponse.js.map