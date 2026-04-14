"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomCostsFileListResponse = void 0;
/**
 * Response for List Custom Costs files.
 */
class CustomCostsFileListResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomCostsFileListResponse.attributeTypeMap;
    }
}
exports.CustomCostsFileListResponse = CustomCostsFileListResponse;
/**
 * @ignore
 */
CustomCostsFileListResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<CustomCostsFileMetadataHighLevel>",
    },
    meta: {
        baseName: "meta",
        type: "CustomCostListResponseMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CustomCostsFileListResponse.js.map