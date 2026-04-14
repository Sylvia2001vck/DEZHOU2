"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSCloudAuthPersonaMappingDataResponse = void 0;
/**
 * Data for AWS cloud authentication persona mapping response
 */
class AWSCloudAuthPersonaMappingDataResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSCloudAuthPersonaMappingDataResponse.attributeTypeMap;
    }
}
exports.AWSCloudAuthPersonaMappingDataResponse = AWSCloudAuthPersonaMappingDataResponse;
/**
 * @ignore
 */
AWSCloudAuthPersonaMappingDataResponse.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "AWSCloudAuthPersonaMappingAttributesResponse",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "AWSCloudAuthPersonaMappingType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AWSCloudAuthPersonaMappingDataResponse.js.map