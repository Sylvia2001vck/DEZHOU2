"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityResponseIncludedRelatedEntity = void 0;
/**
 * Included related entity.
 */
class EntityResponseIncludedRelatedEntity {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EntityResponseIncludedRelatedEntity.attributeTypeMap;
    }
}
exports.EntityResponseIncludedRelatedEntity = EntityResponseIncludedRelatedEntity;
/**
 * @ignore
 */
EntityResponseIncludedRelatedEntity.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "EntityResponseIncludedRelatedEntityAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    meta: {
        baseName: "meta",
        type: "EntityResponseIncludedRelatedEntityMeta",
    },
    type: {
        baseName: "type",
        type: "EntityResponseIncludedRelatedEntityType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EntityResponseIncludedRelatedEntity.js.map