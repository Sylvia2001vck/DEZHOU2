"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSCloudAuthPersonaMappingCreateData = void 0;
/**
 * Data for creating an AWS cloud authentication persona mapping
 */
class AWSCloudAuthPersonaMappingCreateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSCloudAuthPersonaMappingCreateData.attributeTypeMap;
    }
}
exports.AWSCloudAuthPersonaMappingCreateData = AWSCloudAuthPersonaMappingCreateData;
/**
 * @ignore
 */
AWSCloudAuthPersonaMappingCreateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "AWSCloudAuthPersonaMappingCreateAttributes",
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
//# sourceMappingURL=AWSCloudAuthPersonaMappingCreateData.js.map