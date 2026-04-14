"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemApiPayloadMeta = void 0;
/**
 * Additional metadata about a collection of datastore items, including pagination and schema information.
 */
class ItemApiPayloadMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ItemApiPayloadMeta.attributeTypeMap;
    }
}
exports.ItemApiPayloadMeta = ItemApiPayloadMeta;
/**
 * @ignore
 */
ItemApiPayloadMeta.attributeTypeMap = {
    page: {
        baseName: "page",
        type: "ItemApiPayloadMetaPage",
    },
    schema: {
        baseName: "schema",
        type: "ItemApiPayloadMetaSchema",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ItemApiPayloadMeta.js.map