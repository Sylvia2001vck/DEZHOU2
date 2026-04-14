"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityResponseDataRelationshipsSchemaData = void 0;
class EntityResponseDataRelationshipsSchemaData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EntityResponseDataRelationshipsSchemaData.attributeTypeMap;
    }
}
exports.EntityResponseDataRelationshipsSchemaData = EntityResponseDataRelationshipsSchemaData;
/**
 * @ignore
 */
EntityResponseDataRelationshipsSchemaData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "EntityResponseDataRelationshipsSchemaDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EntityResponseDataRelationshipsSchemaData.js.map