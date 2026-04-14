"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomCostsFileGetResponse = void 0;
/**
 * Response for Get Custom Costs files.
 */
class CustomCostsFileGetResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomCostsFileGetResponse.attributeTypeMap;
    }
}
exports.CustomCostsFileGetResponse = CustomCostsFileGetResponse;
/**
 * @ignore
 */
CustomCostsFileGetResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CustomCostsFileMetadataWithContentHighLevel",
    },
    meta: {
        baseName: "meta",
        type: "CustomCostGetResponseMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CustomCostsFileGetResponse.js.map