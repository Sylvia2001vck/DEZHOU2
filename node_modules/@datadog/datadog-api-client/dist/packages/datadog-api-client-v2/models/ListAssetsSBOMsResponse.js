"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAssetsSBOMsResponse = void 0;
/**
 * The expected response schema when listing assets SBOMs.
 */
class ListAssetsSBOMsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ListAssetsSBOMsResponse.attributeTypeMap;
    }
}
exports.ListAssetsSBOMsResponse = ListAssetsSBOMsResponse;
/**
 * @ignore
 */
ListAssetsSBOMsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<SBOM>",
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
//# sourceMappingURL=ListAssetsSBOMsResponse.js.map