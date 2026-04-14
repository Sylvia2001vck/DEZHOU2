"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityResponseDataRelationshipsSchema = void 0;
class EntityResponseDataRelationshipsSchema {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EntityResponseDataRelationshipsSchema.attributeTypeMap;
    }
}
exports.EntityResponseDataRelationshipsSchema = EntityResponseDataRelationshipsSchema;
/**
 * @ignore
 */
EntityResponseDataRelationshipsSchema.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "EntityResponseDataRelationshipsSchemaData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EntityResponseDataRelationshipsSchema.js.map