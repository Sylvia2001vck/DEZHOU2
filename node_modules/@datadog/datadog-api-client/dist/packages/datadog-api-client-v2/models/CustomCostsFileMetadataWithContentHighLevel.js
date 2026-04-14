"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomCostsFileMetadataWithContentHighLevel = void 0;
/**
 * JSON API format of for a Custom Costs file with content.
 */
class CustomCostsFileMetadataWithContentHighLevel {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomCostsFileMetadataWithContentHighLevel.attributeTypeMap;
    }
}
exports.CustomCostsFileMetadataWithContentHighLevel = CustomCostsFileMetadataWithContentHighLevel;
/**
 * @ignore
 */
CustomCostsFileMetadataWithContentHighLevel.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CustomCostsFileMetadataWithContent",
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
//# sourceMappingURL=CustomCostsFileMetadataWithContentHighLevel.js.map