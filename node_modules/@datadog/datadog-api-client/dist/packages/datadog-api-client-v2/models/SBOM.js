"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SBOM = void 0;
/**
 * A single SBOM
 */
class SBOM {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SBOM.attributeTypeMap;
    }
}
exports.SBOM = SBOM;
/**
 * @ignore
 */
SBOM.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "SBOMAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "SBOMType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SBOM.js.map