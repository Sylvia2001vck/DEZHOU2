"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SAMLAssertionAttribute = void 0;
/**
 * SAML assertion attribute.
 */
class SAMLAssertionAttribute {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SAMLAssertionAttribute.attributeTypeMap;
    }
}
exports.SAMLAssertionAttribute = SAMLAssertionAttribute;
/**
 * @ignore
 */
SAMLAssertionAttribute.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "SAMLAssertionAttributeAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "SAMLAssertionAttributesType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SAMLAssertionAttribute.js.map