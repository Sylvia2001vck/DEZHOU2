"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityResponseDataRelationshipsRawSchema = void 0;
class EntityResponseDataRelationshipsRawSchema {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EntityResponseDataRelationshipsRawSchema.attributeTypeMap;
    }
}
exports.EntityResponseDataRelationshipsRawSchema = EntityResponseDataRelationshipsRawSchema;
/**
 * @ignore
 */
EntityResponseDataRelationshipsRawSchema.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "EntityResponseDataRelationshipsRawSchemaData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EntityResponseDataRelationshipsRawSchema.js.map