"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableResultV2DataAttributesSchemaFieldsItems = void 0;
/**
 * A single field (column) in the reference table schema to be returned.
 */
class TableResultV2DataAttributesSchemaFieldsItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TableResultV2DataAttributesSchemaFieldsItems.attributeTypeMap;
    }
}
exports.TableResultV2DataAttributesSchemaFieldsItems = TableResultV2DataAttributesSchemaFieldsItems;
/**
 * @ignore
 */
TableResultV2DataAttributesSchemaFieldsItems.attributeTypeMap = {
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "ReferenceTableSchemaFieldType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TableResultV2DataAttributesSchemaFieldsItems.js.map