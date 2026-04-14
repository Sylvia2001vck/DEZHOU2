"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScannedAssetMetadataAsset = void 0;
/**
 * The asset of a scanned asset metadata.
 */
class ScannedAssetMetadataAsset {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ScannedAssetMetadataAsset.attributeTypeMap;
    }
}
exports.ScannedAssetMetadataAsset = ScannedAssetMetadataAsset;
/**
 * @ignore
 */
ScannedAssetMetadataAsset.attributeTypeMap = {
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "CloudAssetType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ScannedAssetMetadataAsset.js.map