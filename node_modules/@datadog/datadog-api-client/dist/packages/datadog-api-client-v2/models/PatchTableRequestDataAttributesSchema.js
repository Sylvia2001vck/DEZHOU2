"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchTableRequestDataAttributesSchema = void 0;
/**
 * Schema defining the updates to the structure and columns of the reference table. Schema fields cannot be deleted or renamed.
 */
class PatchTableRequestDataAttributesSchema {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PatchTableRequestDataAttributesSchema.attributeTypeMap;
    }
}
exports.PatchTableRequestDataAttributesSchema = PatchTableRequestDataAttributesSchema;
/**
 * @ignore
 */
PatchTableRequestDataAttributesSchema.attributeTypeMap = {
    fields: {
        baseName: "fields",
        type: "Array<PatchTableRequestDataAttributesSchemaFieldsItems>",
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
//# sourceMappingURL=PatchTableRequestDataAttributesSchema.js.map