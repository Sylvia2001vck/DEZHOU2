"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomAttributeConfigAttributesCreate = void 0;
/**
 * Custom attribute config resource attributes
 */
class CustomAttributeConfigAttributesCreate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomAttributeConfigAttributesCreate.attributeTypeMap;
    }
}
exports.CustomAttributeConfigAttributesCreate = CustomAttributeConfigAttributesCreate;
/**
 * @ignore
 */
CustomAttributeConfigAttributesCreate.attributeTypeMap = {
    description: {
        baseName: "description",
        type: "string",
    },
    displayName: {
        baseName: "display_name",
        type: "string",
        required: true,
    },
    isMulti: {
        baseName: "is_multi",
        type: "boolean",
        required: true,
    },
    key: {
        baseName: "key",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "CustomAttributeType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CustomAttributeConfigAttributesCreate.js.map