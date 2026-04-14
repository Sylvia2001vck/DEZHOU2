"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SBOMComponentLicense = void 0;
/**
 * The software license of the component of the SBOM.
 */
class SBOMComponentLicense {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SBOMComponentLicense.attributeTypeMap;
    }
}
exports.SBOMComponentLicense = SBOMComponentLicense;
/**
 * @ignore
 */
SBOMComponentLicense.attributeTypeMap = {
    license: {
        baseName: "license",
        type: "SBOMComponentLicenseLicense",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SBOMComponentLicense.js.map