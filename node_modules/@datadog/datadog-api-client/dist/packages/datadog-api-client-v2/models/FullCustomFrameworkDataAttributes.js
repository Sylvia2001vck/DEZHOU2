"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FullCustomFrameworkDataAttributes = void 0;
/**
 * Full Framework Data Attributes.
 */
class FullCustomFrameworkDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FullCustomFrameworkDataAttributes.attributeTypeMap;
    }
}
exports.FullCustomFrameworkDataAttributes = FullCustomFrameworkDataAttributes;
/**
 * @ignore
 */
FullCustomFrameworkDataAttributes.attributeTypeMap = {
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
//# sourceMappingURL=FullCustomFrameworkDataAttributes.js.map