"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityResponseIncludedSchemaAttributes = void 0;
/**
 * Included schema.
 */
class EntityResponseIncludedSchemaAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EntityResponseIncludedSchemaAttributes.attributeTypeMap;
    }
}
exports.EntityResponseIncludedSchemaAttributes = EntityResponseIncludedSchemaAttributes;
/**
 * @ignore
 */
EntityResponseIncludedSchemaAttributes.attributeTypeMap = {
    schema: {
        baseName: "schema",
        type: "EntityV3",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EntityResponseIncludedSchemaAttributes.js.map