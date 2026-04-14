"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchTableRequestDataAttributesSchemaFieldsItems = void 0;
/**
 * A single field (column) in the reference table schema to be updated. Schema fields cannot be deleted or renamed.
 */
class PatchTableRequestDataAttributesSchemaFieldsItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PatchTableRequestDataAttributesSchemaFieldsItems.attributeTypeMap;
    }
}
exports.PatchTableRequestDataAttributesSchemaFieldsItems = PatchTableRequestDataAttributesSchemaFieldsItems;
/**
 * @ignore
 */
PatchTableRequestDataAttributesSchemaFieldsItems.attributeTypeMap = {
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
//# sourceMappingURL=PatchTableRequestDataAttributesSchemaFieldsItems.js.map