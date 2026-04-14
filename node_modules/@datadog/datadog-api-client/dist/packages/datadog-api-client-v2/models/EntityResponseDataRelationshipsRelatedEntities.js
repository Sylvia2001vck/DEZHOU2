"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityResponseDataRelationshipsRelatedEntities = void 0;
class EntityResponseDataRelationshipsRelatedEntities {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EntityResponseDataRelationshipsRelatedEntities.attributeTypeMap;
    }
}
exports.EntityResponseDataRelationshipsRelatedEntities = EntityResponseDataRelationshipsRelatedEntities;
/**
 * @ignore
 */
EntityResponseDataRelationshipsRelatedEntities.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<EntityResponseDataRelationshipsRelatedEntitiesDataItems>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EntityResponseDataRelationshipsRelatedEntities.js.map