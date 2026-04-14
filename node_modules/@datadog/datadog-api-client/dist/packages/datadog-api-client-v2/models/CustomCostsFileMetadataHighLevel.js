"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomCostsFileMetadataHighLevel = void 0;
/**
 * JSON API format for a Custom Costs file.
 */
class CustomCostsFileMetadataHighLevel {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomCostsFileMetadataHighLevel.attributeTypeMap;
    }
}
exports.CustomCostsFileMetadataHighLevel = CustomCostsFileMetadataHighLevel;
/**
 * @ignore
 */
CustomCostsFileMetadataHighLevel.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CustomCostsFileMetadata",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CustomCostsFileMetadataHighLevel.js.map