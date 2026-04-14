"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityResponseDataRelationshipsRawSchemaData = void 0;
class EntityResponseDataRelationshipsRawSchemaData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EntityResponseDataRelationshipsRawSchemaData.attributeTypeMap;
    }
}
exports.EntityResponseDataRelationshipsRawSchemaData = EntityResponseDataRelationshipsRawSchemaData;
/**
 * @ignore
 */
EntityResponseDataRelationshipsRawSchemaData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "EntityResponseDataRelationshipsRawSchemaDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EntityResponseDataRelationshipsRawSchemaData.js.map