"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationToEntity = void 0;
/**
 * Relation to entity.
 */
class RelationToEntity {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RelationToEntity.attributeTypeMap;
    }
}
exports.RelationToEntity = RelationToEntity;
/**
 * @ignore
 */
RelationToEntity.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "RelationshipItem",
    },
    meta: {
        baseName: "meta",
        type: "EntityMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RelationToEntity.js.map