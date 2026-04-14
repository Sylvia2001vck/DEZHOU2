"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataDeletionResponseItemAttributes = void 0;
/**
 * Deletion attribute for data deletion response.
 */
class DataDeletionResponseItemAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DataDeletionResponseItemAttributes.attributeTypeMap;
    }
}
exports.DataDeletionResponseItemAttributes = DataDeletionResponseItemAttributes;
/**
 * @ignore
 */
DataDeletionResponseItemAttributes.attributeTypeMap = {
    createdAt: {
        baseName: "created_at",
        type: "string",
        required: true,
    },
    createdBy: {
        baseName: "created_by",
        type: "string",
        required: true,
    },
    fromTime: {
        baseName: "from_time",
        type: "number",
        required: true,
        format: "int64",
    },
    indexes: {
        baseName: "indexes",
        type: "Array<string>",
    },
    isCreated: {
        baseName: "is_created",
        type: "boolean",
        required: true,
    },
    orgId: {
        baseName: "org_id",
        type: "number",
        required: true,
        format: "int64",
    },
    product: {
        baseName: "product",
        type: "string",
        required: true,
    },
    query: {
        baseName: "query",
        type: "string",
        required: true,
    },
    startingAt: {
        baseName: "starting_at",
        type: "string",
        required: true,
    },
    status: {
        baseName: "status",
        type: "string",
        required: true,
    },
    toTime: {
        baseName: "to_time",
        type: "number",
        required: true,
        format: "int64",
    },
    totalUnrestricted: {
        baseName: "total_unrestricted",
        type: "number",
        required: true,
        format: "int64",
    },
    updatedAt: {
        baseName: "updated_at",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DataDeletionResponseItemAttributes.js.map