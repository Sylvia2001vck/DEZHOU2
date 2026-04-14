"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatastoreDataAttributes = void 0;
/**
 * Detailed information about a datastore.
 */
class DatastoreDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DatastoreDataAttributes.attributeTypeMap;
    }
}
exports.DatastoreDataAttributes = DatastoreDataAttributes;
/**
 * @ignore
 */
DatastoreDataAttributes.attributeTypeMap = {
    createdAt: {
        baseName: "created_at",
        type: "Date",
        format: "date-time",
    },
    creatorUserId: {
        baseName: "creator_user_id",
        type: "number",
        format: "int64",
    },
    creatorUserUuid: {
        baseName: "creator_user_uuid",
        type: "string",
    },
    description: {
        baseName: "description",
        type: "string",
    },
    modifiedAt: {
        baseName: "modified_at",
        type: "Date",
        format: "date-time",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    orgId: {
        baseName: "org_id",
        type: "number",
        format: "int64",
    },
    primaryColumnName: {
        baseName: "primary_column_name",
        type: "string",
    },
    primaryKeyGenerationStrategy: {
        baseName: "primary_key_generation_strategy",
        type: "DatastorePrimaryKeyGenerationStrategy",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DatastoreDataAttributes.js.map