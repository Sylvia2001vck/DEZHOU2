"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomFrameworkMetadata = void 0;
/**
 * Metadata for custom frameworks.
 */
class CustomFrameworkMetadata {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomFrameworkMetadata.attributeTypeMap;
    }
}
exports.CustomFrameworkMetadata = CustomFrameworkMetadata;
/**
 * @ignore
 */
CustomFrameworkMetadata.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CustomFrameworkWithoutRequirements",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "CustomFrameworkType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CustomFrameworkMetadata.js.map