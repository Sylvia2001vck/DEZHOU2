"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationshipToSAMLAssertionAttribute = void 0;
/**
 * AuthN Mapping relationship to SAML Assertion Attribute.
 */
class RelationshipToSAMLAssertionAttribute {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RelationshipToSAMLAssertionAttribute.attributeTypeMap;
    }
}
exports.RelationshipToSAMLAssertionAttribute = RelationshipToSAMLAssertionAttribute;
/**
 * @ignore
 */
RelationshipToSAMLAssertionAttribute.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "RelationshipToSAMLAssertionAttributeData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RelationshipToSAMLAssertionAttribute.js.map