"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomAttributeValue = void 0;
/**
 * Custom attribute values
 */
class CustomAttributeValue {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomAttributeValue.attributeTypeMap;
    }
}
exports.CustomAttributeValue = CustomAttributeValue;
/**
 * @ignore
 */
CustomAttributeValue.attributeTypeMap = {
    isMulti: {
        baseName: "is_multi",
        type: "boolean",
        required: true,
    },
    type: {
        baseName: "type",
        type: "CustomAttributeType",
        required: true,
    },
    value: {
        baseName: "value",
        type: "CustomAttributeValuesUnion",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CustomAttributeValue.js.map