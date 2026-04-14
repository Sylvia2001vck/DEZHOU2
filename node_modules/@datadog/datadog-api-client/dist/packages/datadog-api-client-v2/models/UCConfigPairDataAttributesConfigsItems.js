"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UCConfigPairDataAttributesConfigsItems = void 0;
/**
 * The definition of `UCConfigPairDataAttributesConfigsItems` object.
 */
class UCConfigPairDataAttributesConfigsItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UCConfigPairDataAttributesConfigsItems.attributeTypeMap;
    }
}
exports.UCConfigPairDataAttributesConfigsItems = UCConfigPairDataAttributesConfigsItems;
/**
 * @ignore
 */
UCConfigPairDataAttributesConfigsItems.attributeTypeMap = {
    accountId: {
        baseName: "account_id",
        type: "string",
    },
    clientId: {
        baseName: "client_id",
        type: "string",
    },
    createdAt: {
        baseName: "created_at",
        type: "string",
    },
    datasetType: {
        baseName: "dataset_type",
        type: "string",
    },
    errorMessages: {
        baseName: "error_messages",
        type: "Array<string>",
    },
    exportName: {
        baseName: "export_name",
        type: "string",
    },
    exportPath: {
        baseName: "export_path",
        type: "string",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    months: {
        baseName: "months",
        type: "number",
        format: "int64",
    },
    scope: {
        baseName: "scope",
        type: "string",
    },
    status: {
        baseName: "status",
        type: "string",
    },
    statusUpdatedAt: {
        baseName: "status_updated_at",
        type: "string",
    },
    storageAccount: {
        baseName: "storage_account",
        type: "string",
    },
    storageContainer: {
        baseName: "storage_container",
        type: "string",
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
//# sourceMappingURL=UCConfigPairDataAttributesConfigsItems.js.map