"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityResponseIncludedRawSchema = void 0;
/**
 * Included raw schema.
 */
class EntityResponseIncludedRawSchema {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EntityResponseIncludedRawSchema.attributeTypeMap;
    }
}
exports.EntityResponseIncludedRawSchema = EntityResponseIncludedRawSchema;
/**
 * @ignore
 */
EntityResponseIncludedRawSchema.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "EntityResponseIncludedRawSchemaAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "EntityResponseIncludedRawSchemaType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EntityResponseIncludedRawSchema.js.map