"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableResultV2DataAttributesSchema = void 0;
/**
 * Schema defining the structure and columns of the reference table.
 */
class TableResultV2DataAttributesSchema {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TableResultV2DataAttributesSchema.attributeTypeMap;
    }
}
exports.TableResultV2DataAttributesSchema = TableResultV2DataAttributesSchema;
/**
 * @ignore
 */
TableResultV2DataAttributesSchema.attributeTypeMap = {
    fields: {
        baseName: "fields",
        type: "Array<TableResultV2DataAttributesSchemaFieldsItems>",
        required: true,
    },
    primaryKeys: {
        baseName: "primary_keys",
        type: "Array<string>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TableResultV2DataAttributesSchema.js.map