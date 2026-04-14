"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityResponseDataRelationshipsOncallsDataItems = void 0;
class EntityResponseDataRelationshipsOncallsDataItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EntityResponseDataRelationshipsOncallsDataItems.attributeTypeMap;
    }
}
exports.EntityResponseDataRelationshipsOncallsDataItems = EntityResponseDataRelationshipsOncallsDataItems;
/**
 * @ignore
 */
EntityResponseDataRelationshipsOncallsDataItems.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "EntityResponseDataRelationshipsOncallsDataItemsType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EntityResponseDataRelationshipsOncallsDataItems.js.map