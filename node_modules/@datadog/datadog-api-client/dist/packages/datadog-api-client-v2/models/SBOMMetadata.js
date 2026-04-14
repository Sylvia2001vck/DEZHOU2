"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SBOMMetadata = void 0;
/**
 * Provides additional information about a BOM.
 */
class SBOMMetadata {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SBOMMetadata.attributeTypeMap;
    }
}
exports.SBOMMetadata = SBOMMetadata;
/**
 * @ignore
 */
SBOMMetadata.attributeTypeMap = {
    authors: {
        baseName: "authors",
        type: "Array<SBOMMetadataAuthor>",
    },
    component: {
        baseName: "component",
        type: "SBOMMetadataComponent",
    },
    timestamp: {
        baseName: "timestamp",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SBOMMetadata.js.map