"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationshipToSAMLAssertionAttributeData = void 0;
/**
 * Data of AuthN Mapping relationship to SAML Assertion Attribute.
 */
class RelationshipToSAMLAssertionAttributeData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RelationshipToSAMLAssertionAttributeData.attributeTypeMap;
    }
}
exports.RelationshipToSAMLAssertionAttributeData = RelationshipToSAMLAssertionAttributeData;
/**
 * @ignore
 */
RelationshipToSAMLAssertionAttributeData.attributeTypeMap = {
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
//# sourceMappingURL=RelationshipToSAMLAssertionAttributeData.js.map