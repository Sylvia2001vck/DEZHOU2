"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemApiPayloadMetaSchema = void 0;
/**
 * Schema information about the datastore, including its primary key and field definitions.
 */
class ItemApiPayloadMetaSchema {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ItemApiPayloadMetaSchema.attributeTypeMap;
    }
}
exports.ItemApiPayloadMetaSchema = ItemApiPayloadMetaSchema;
/**
 * @ignore
 */
ItemApiPayloadMetaSchema.attributeTypeMap = {
    fields: {
        baseName: "fields",
        type: "Array<ItemApiPayloadMetaSchemaField>",
    },
    primaryKey: {
        baseName: "primary_key",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ItemApiPayloadMetaSchema.js.map