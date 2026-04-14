"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomCostsFileUploadResponse = void 0;
/**
 * Response for Uploaded Custom Costs files.
 */
class CustomCostsFileUploadResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomCostsFileUploadResponse.attributeTypeMap;
    }
}
exports.CustomCostsFileUploadResponse = CustomCostsFileUploadResponse;
/**
 * @ignore
 */
CustomCostsFileUploadResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CustomCostsFileMetadataHighLevel",
    },
    meta: {
        baseName: "meta",
        type: "CustomCostUploadResponseMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CustomCostsFileUploadResponse.js.map