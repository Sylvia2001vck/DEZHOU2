"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityToRelatedEntities = void 0;
/**
 * Entity to related entities relationship.
 */
class EntityToRelatedEntities {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EntityToRelatedEntities.attributeTypeMap;
    }
}
exports.EntityToRelatedEntities = EntityToRelatedEntities;
/**
 * @ignore
 */
EntityToRelatedEntities.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<RelationshipItem>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EntityToRelatedEntities.js.map