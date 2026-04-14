"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCPUsageCostConfigAttributes = void 0;
/**
 * Attributes for a Google Cloud Usage Cost config.
 */
class GCPUsageCostConfigAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GCPUsageCostConfigAttributes.attributeTypeMap;
    }
}
exports.GCPUsageCostConfigAttributes = GCPUsageCostConfigAttributes;
/**
 * @ignore
 */
GCPUsageCostConfigAttributes.attributeTypeMap = {
    accountId: {
        baseName: "account_id",
        type: "string",
        required: true,
    },
    bucketName: {
        baseName: "bucket_name",
        type: "string",
        required: true,
    },
    createdAt: {
        baseName: "created_at",
        type: "string",
    },
    dataset: {
        baseName: "dataset",
        type: "string",
        required: true,
    },
    errorMessages: {
        baseName: "error_messages",
        type: "Array<string>",
    },
    exportPrefix: {
        baseName: "export_prefix",
        type: "string",
        required: true,
    },
    exportProjectName: {
        baseName: "export_project_name",
        type: "string",
        required: true,
    },
    months: {
        baseName: "months",
        type: "number",
        format: "int32",
    },
    projectId: {
        baseName: "project_id",
        type: "string",
    },
    serviceAccount: {
        baseName: "service_account",
        type: "string",
        required: true,
    },
    status: {
        baseName: "status",
        type: "string",
        required: true,
    },
    statusUpdatedAt: {
        baseName: "status_updated_at",
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
//# sourceMappingURL=GCPUsageCostConfigAttributes.js.map