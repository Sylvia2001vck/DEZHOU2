"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomConnectionAttributes = void 0;
/**
 * The custom connection attributes.
 */
class CustomConnectionAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomConnectionAttributes.attributeTypeMap;
    }
}
exports.CustomConnectionAttributes = CustomConnectionAttributes;
/**
 * @ignore
 */
CustomConnectionAttributes.attributeTypeMap = {
    name: {
        baseName: "name",
        type: "string",
    },
    onPremRunner: {
        baseName: "onPremRunner",
        type: "CustomConnectionAttributesOnPremRunner",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CustomConnectionAttributes.js.map