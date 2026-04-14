"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SBOMAttributes = void 0;
/**
 * The JSON:API attributes of the SBOM.
 */
class SBOMAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SBOMAttributes.attributeTypeMap;
    }
}
exports.SBOMAttributes = SBOMAttributes;
/**
 * @ignore
 */
SBOMAttributes.attributeTypeMap = {
    bomFormat: {
        baseName: "bomFormat",
        type: "string",
        required: true,
    },
    components: {
        baseName: "components",
        type: "Array<SBOMComponent>",
        required: true,
    },
    dependencies: {
        baseName: "dependencies",
        type: "Array<SBOMComponentDependency>",
        required: true,
    },
    metadata: {
        baseName: "metadata",
        type: "SBOMMetadata",
        required: true,
    },
    serialNumber: {
        baseName: "serialNumber",
        type: "string",
        required: true,
    },
    specVersion: {
        baseName: "specVersion",
        type: "SpecVersion",
        required: true,
    },
    version: {
        baseName: "version",
        type: "number",
        required: true,
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SBOMAttributes.js.map