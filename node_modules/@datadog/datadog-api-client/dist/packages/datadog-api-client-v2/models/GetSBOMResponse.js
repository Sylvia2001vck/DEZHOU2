"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSBOMResponse = void 0;
/**
 * The expected response schema when getting an SBOM.
 */
class GetSBOMResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GetSBOMResponse.attributeTypeMap;
    }
}
exports.GetSBOMResponse = GetSBOMResponse;
/**
 * @ignore
 */
GetSBOMResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "SBOM",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GetSBOMResponse.js.map