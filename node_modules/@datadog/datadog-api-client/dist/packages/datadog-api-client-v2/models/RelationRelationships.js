"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationRelationships = void 0;
/**
 * Relation relationships.
 */
class RelationRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RelationRelationships.attributeTypeMap;
    }
}
exports.RelationRelationships = RelationRelationships;
/**
 * @ignore
 */
RelationRelationships.attributeTypeMap = {
    fromEntity: {
        baseName: "fromEntity",
        type: "RelationToEntity",
    },
    toEntity: {
        baseName: "toEntity",
        type: "RelationToEntity",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RelationRelationships.js.map