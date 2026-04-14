"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityResponseDataRelationshipsIncidentsDataItems = void 0;
class EntityResponseDataRelationshipsIncidentsDataItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EntityResponseDataRelationshipsIncidentsDataItems.attributeTypeMap;
    }
}
exports.EntityResponseDataRelationshipsIncidentsDataItems = EntityResponseDataRelationshipsIncidentsDataItems;
/**
 * @ignore
 */
EntityResponseDataRelationshipsIncidentsDataItems.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "EntityResponseDataRelationshipsIncidentsDataItemsType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EntityResponseDataRelationshipsIncidentsDataItems.js.map