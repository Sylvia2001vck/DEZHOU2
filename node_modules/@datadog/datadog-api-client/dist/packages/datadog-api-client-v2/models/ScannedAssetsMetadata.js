"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScannedAssetsMetadata = void 0;
/**
 * The expected response schema when listing scanned assets metadata.
 */
class ScannedAssetsMetadata {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ScannedAssetsMetadata.attributeTypeMap;
    }
}
exports.ScannedAssetsMetadata = ScannedAssetsMetadata;
/**
 * @ignore
 */
ScannedAssetsMetadata.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<ScannedAssetMetadata>",
        required: true,
    },
    links: {
        baseName: "links",
        type: "Links",
    },
    meta: {
        baseName: "meta",
        type: "Metadata",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ScannedAssetsMetadata.js.map