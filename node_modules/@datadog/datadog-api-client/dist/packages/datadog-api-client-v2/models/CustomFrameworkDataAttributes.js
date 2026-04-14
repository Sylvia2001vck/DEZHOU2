"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomFrameworkDataAttributes = void 0;
/**
 * Framework Data Attributes.
 */
class CustomFrameworkDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomFrameworkDataAttributes.attributeTypeMap;
    }
}
exports.CustomFrameworkDataAttributes = CustomFrameworkDataAttributes;
/**
 * @ignore
 */
CustomFrameworkDataAttributes.attributeTypeMap = {
    description: {
        baseName: "description",
        type: "string",
    },
    handle: {
        baseName: "handle",
        type: "string",
        required: true,
    },
    iconUrl: {
        baseName: "icon_url",
        type: "string",
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    requirements: {
        baseName: "requirements",
        type: "Array<CustomFrameworkRequirement>",
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
//# sourceMappingURL=CustomFrameworkDataAttributes.js.map