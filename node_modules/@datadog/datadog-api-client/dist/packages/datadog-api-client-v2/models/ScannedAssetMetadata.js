"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScannedAssetMetadata = void 0;
/**
 * The metadata of a scanned asset.
 */
class ScannedAssetMetadata {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ScannedAssetMetadata.attributeTypeMap;
    }
}
exports.ScannedAssetMetadata = ScannedAssetMetadata;
/**
 * @ignore
 */
ScannedAssetMetadata.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ScannedAssetMetadataAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ScannedAssetMetadata.js.map