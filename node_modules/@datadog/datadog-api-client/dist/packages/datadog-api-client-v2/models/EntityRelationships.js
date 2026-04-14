"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityRelationships = void 0;
/**
 * Entity relationships.
 */
class EntityRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EntityRelationships.attributeTypeMap;
    }
}
exports.EntityRelationships = EntityRelationships;
/**
 * @ignore
 */
EntityRelationships.attributeTypeMap = {
    incidents: {
        baseName: "incidents",
        type: "EntityToIncidents",
    },
    oncall: {
        baseName: "oncall",
        type: "EntityToOncalls",
    },
    rawSchema: {
        baseName: "rawSchema",
        type: "EntityToRawSchema",
    },
    relatedEntities: {
        baseName: "relatedEntities",
        type: "EntityToRelatedEntities",
    },
    schema: {
        baseName: "schema",
        type: "EntityToSchema",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EntityRelationships.js.map