"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemApiPayloadDataAttributes = void 0;
/**
 * Metadata and content of a datastore item.
 */
class ItemApiPayloadDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ItemApiPayloadDataAttributes.attributeTypeMap;
    }
}
exports.ItemApiPayloadDataAttributes = ItemApiPayloadDataAttributes;
/**
 * @ignore
 */
ItemApiPayloadDataAttributes.attributeTypeMap = {
    createdAt: {
        baseName: "created_at",
        type: "Date",
        format: "date-time",
    },
    modifiedAt: {
        baseName: "modified_at",
        type: "Date",
        format: "date-time",
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
    signature: {
        baseName: "signature",
        type: "string",
    },
    storeId: {
        baseName: "store_id",
        type: "string",
    },
    value: {
        baseName: "value",
        type: "{ [key: string]: any; }",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ItemApiPayloadDataAttributes.js.map