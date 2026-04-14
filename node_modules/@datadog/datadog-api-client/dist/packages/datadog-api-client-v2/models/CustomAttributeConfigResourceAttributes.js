"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomAttributeConfigResourceAttributes = void 0;
/**
 * Custom attribute resource attributes
 */
class CustomAttributeConfigResourceAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomAttributeConfigResourceAttributes.attributeTypeMap;
    }
}
exports.CustomAttributeConfigResourceAttributes = CustomAttributeConfigResourceAttributes;
/**
 * @ignore
 */
CustomAttributeConfigResourceAttributes.attributeTypeMap = {
    caseTypeId: {
        baseName: "case_type_id",
        type: "string",
        required: true,
    },
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
//# sourceMappingURL=CustomAttributeConfigResourceAttributes.js.map