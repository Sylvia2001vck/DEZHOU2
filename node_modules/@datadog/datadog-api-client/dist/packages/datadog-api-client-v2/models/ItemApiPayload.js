"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemApiPayload = void 0;
/**
 * A single datastore item with its content and metadata.
 */
class ItemApiPayload {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ItemApiPayload.attributeTypeMap;
    }
}
exports.ItemApiPayload = ItemApiPayload;
/**
 * @ignore
 */
ItemApiPayload.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "ItemApiPayloadData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ItemApiPayload.js.map