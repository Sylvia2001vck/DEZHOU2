"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityResponseDataRelationshipsRelatedEntitiesDataItems = void 0;
class EntityResponseDataRelationshipsRelatedEntitiesDataItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EntityResponseDataRelationshipsRelatedEntitiesDataItems.attributeTypeMap;
    }
}
exports.EntityResponseDataRelationshipsRelatedEntitiesDataItems = EntityResponseDataRelationshipsRelatedEntitiesDataItems;
/**
 * @ignore
 */
EntityResponseDataRelationshipsRelatedEntitiesDataItems.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "EntityResponseDataRelationshipsRelatedEntitiesDataItemsType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EntityResponseDataRelationshipsRelatedEntitiesDataItems.js.map