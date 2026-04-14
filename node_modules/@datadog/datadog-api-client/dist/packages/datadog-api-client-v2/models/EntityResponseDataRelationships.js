"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityResponseDataRelationships = void 0;
class EntityResponseDataRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EntityResponseDataRelationships.attributeTypeMap;
    }
}
exports.EntityResponseDataRelationships = EntityResponseDataRelationships;
/**
 * @ignore
 */
EntityResponseDataRelationships.attributeTypeMap = {
    incidents: {
        baseName: "incidents",
        type: "EntityResponseDataRelationshipsIncidents",
    },
    oncalls: {
        baseName: "oncalls",
        type: "EntityResponseDataRelationshipsOncalls",
    },
    rawSchema: {
        baseName: "rawSchema",
        type: "EntityResponseDataRelationshipsRawSchema",
    },
    relatedEntities: {
        baseName: "relatedEntities",
        type: "EntityResponseDataRelationshipsRelatedEntities",
    },
    schema: {
        baseName: "schema",
        type: "EntityResponseDataRelationshipsSchema",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EntityResponseDataRelationships.js.map