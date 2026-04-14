"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomAttributeConfig = void 0;
/**
 * The definition of `CustomAttributeConfig` object.
 */
class CustomAttributeConfig {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomAttributeConfig.attributeTypeMap;
    }
}
exports.CustomAttributeConfig = CustomAttributeConfig;
/**
 * @ignore
 */
CustomAttributeConfig.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CustomAttributeConfigResourceAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "CustomAttributeConfigResourceType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CustomAttributeConfig.js.map