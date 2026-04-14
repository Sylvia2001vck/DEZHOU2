"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSCloudAuthPersonaMappingCreateRequest = void 0;
/**
 * Request used to create an AWS cloud authentication persona mapping
 */
class AWSCloudAuthPersonaMappingCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSCloudAuthPersonaMappingCreateRequest.attributeTypeMap;
    }
}
exports.AWSCloudAuthPersonaMappingCreateRequest = AWSCloudAuthPersonaMappingCreateRequest;
/**
 * @ignore
 */
AWSCloudAuthPersonaMappingCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "AWSCloudAuthPersonaMappingCreateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AWSCloudAuthPersonaMappingCreateRequest.js.map