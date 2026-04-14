"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomAttributeConfigCreate = void 0;
/**
 * Custom attribute config
 */
class CustomAttributeConfigCreate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomAttributeConfigCreate.attributeTypeMap;
    }
}
exports.CustomAttributeConfigCreate = CustomAttributeConfigCreate;
/**
 * @ignore
 */
CustomAttributeConfigCreate.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CustomAttributeConfigAttributesCreate",
        required: true,
    },
    type: {
        baseName: "type",
        type: "CustomAttributeConfigResourceType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CustomAttributeConfigCreate.js.map