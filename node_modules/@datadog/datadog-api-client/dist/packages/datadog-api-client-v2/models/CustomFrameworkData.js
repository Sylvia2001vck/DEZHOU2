"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomFrameworkData = void 0;
/**
 * Contains type and attributes for custom frameworks.
 */
class CustomFrameworkData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomFrameworkData.attributeTypeMap;
    }
}
exports.CustomFrameworkData = CustomFrameworkData;
/**
 * @ignore
 */
CustomFrameworkData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CustomFrameworkDataAttributes",
        required: true,
    },
    type: {
        baseName: "type",
        type: "CustomFrameworkType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CustomFrameworkData.js.map