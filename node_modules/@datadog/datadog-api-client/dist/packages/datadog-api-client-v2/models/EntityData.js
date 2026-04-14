"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityData = void 0;
/**
 * Entity data.
 */
class EntityData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EntityData.attributeTypeMap;
    }
}
exports.EntityData = EntityData;
/**
 * @ignore
 */
EntityData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "EntityAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    meta: {
        baseName: "meta",
        type: "EntityMeta",
    },
    relationships: {
        baseName: "relationships",
        type: "EntityRelationships",
    },
    type: {
        baseName: "type",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EntityData.js.map