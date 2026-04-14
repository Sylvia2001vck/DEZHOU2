"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemApiPayloadArray = void 0;
/**
 * A collection of datastore items with pagination and schema metadata.
 */
class ItemApiPayloadArray {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ItemApiPayloadArray.attributeTypeMap;
    }
}
exports.ItemApiPayloadArray = ItemApiPayloadArray;
/**
 * @ignore
 */
ItemApiPayloadArray.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<ItemApiPayloadData>",
        required: true,
    },
    meta: {
        baseName: "meta",
        type: "ItemApiPayloadMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ItemApiPayloadArray.js.map