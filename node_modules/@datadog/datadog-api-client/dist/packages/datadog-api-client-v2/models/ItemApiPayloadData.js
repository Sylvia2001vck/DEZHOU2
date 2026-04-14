"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemApiPayloadData = void 0;
/**
 * Core data and metadata for a single datastore item.
 */
class ItemApiPayloadData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ItemApiPayloadData.attributeTypeMap;
    }
}
exports.ItemApiPayloadData = ItemApiPayloadData;
/**
 * @ignore
 */
ItemApiPayloadData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ItemApiPayloadDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "DatastoreItemsDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ItemApiPayloadData.js.map