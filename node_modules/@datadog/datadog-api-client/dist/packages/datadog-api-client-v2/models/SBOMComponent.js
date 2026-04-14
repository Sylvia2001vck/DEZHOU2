"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SBOMComponent = void 0;
/**
 * Software or hardware component.
 */
class SBOMComponent {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SBOMComponent.attributeTypeMap;
    }
}
exports.SBOMComponent = SBOMComponent;
/**
 * @ignore
 */
SBOMComponent.attributeTypeMap = {
    bomRef: {
        baseName: "bom-ref",
        type: "string",
    },
    licenses: {
        baseName: "licenses",
        type: "Array<SBOMComponentLicense>",
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    properties: {
        baseName: "properties",
        type: "Array<SBOMComponentProperty>",
    },
    purl: {
        baseName: "purl",
        type: "string",
    },
    supplier: {
        baseName: "supplier",
        type: "SBOMComponentSupplier",
        required: true,
    },
    type: {
        baseName: "type",
        type: "SBOMComponentType",
        required: true,
    },
    version: {
        baseName: "version",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SBOMComponent.js.map