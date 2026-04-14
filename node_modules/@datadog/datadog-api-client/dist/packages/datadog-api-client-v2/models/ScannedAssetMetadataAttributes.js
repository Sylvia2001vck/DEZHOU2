"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScannedAssetMetadataAttributes = void 0;
/**
 * The attributes of a scanned asset metadata.
 */
class ScannedAssetMetadataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ScannedAssetMetadataAttributes.attributeTypeMap;
    }
}
exports.ScannedAssetMetadataAttributes = ScannedAssetMetadataAttributes;
/**
 * @ignore
 */
ScannedAssetMetadataAttributes.attributeTypeMap = {
    asset: {
        baseName: "asset",
        type: "ScannedAssetMetadataAsset",
        required: true,
    },
    firstSuccessTimestamp: {
        baseName: "first_success_timestamp",
        type: "string",
        required: true,
    },
    lastSuccess: {
        baseName: "last_success",
        type: "ScannedAssetMetadataLastSuccess",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ScannedAssetMetadataAttributes.js.map