"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityResponseIncludedSchema = void 0;
/**
 * Included detail entity schema.
 */
class EntityResponseIncludedSchema {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EntityResponseIncludedSchema.attributeTypeMap;
    }
}
exports.EntityResponseIncludedSchema = EntityResponseIncludedSchema;
/**
 * @ignore
 */
EntityResponseIncludedSchema.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "EntityResponseIncludedSchemaAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "EntityResponseIncludedSchemaType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EntityResponseIncludedSchema.js.map