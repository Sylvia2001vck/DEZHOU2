"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableResultV2DataAttributes = void 0;
/**
 * Attributes that define the reference table's configuration and properties.
 */
class TableResultV2DataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TableResultV2DataAttributes.attributeTypeMap;
    }
}
exports.TableResultV2DataAttributes = TableResultV2DataAttributes;
/**
 * @ignore
 */
TableResultV2DataAttributes.attributeTypeMap = {
    createdBy: {
        baseName: "created_by",
        type: "string",
    },
    description: {
        baseName: "description",
        type: "string",
    },
    fileMetadata: {
        baseName: "file_metadata",
        type: "TableResultV2DataAttributesFileMetadata",
    },
    lastUpdatedBy: {
        baseName: "last_updated_by",
        type: "string",
    },
    rowCount: {
        baseName: "row_count",
        type: "number",
        format: "int64",
    },
    schema: {
        baseName: "schema",
        type: "TableResultV2DataAttributesSchema",
    },
    source: {
        baseName: "source",
        type: "ReferenceTableSourceType",
    },
    status: {
        baseName: "status",
        type: "string",
    },
    tableName: {
        baseName: "table_name",
        type: "string",
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    updatedAt: {
        baseName: "updated_at",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TableResultV2DataAttributes.js.map