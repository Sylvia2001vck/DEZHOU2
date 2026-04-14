"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GcpUcConfigResponseDataAttributes = void 0;
/**
 * The definition of `GcpUcConfigResponseDataAttributes` object.
 */
class GcpUcConfigResponseDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GcpUcConfigResponseDataAttributes.attributeTypeMap;
    }
}
exports.GcpUcConfigResponseDataAttributes = GcpUcConfigResponseDataAttributes;
/**
 * @ignore
 */
GcpUcConfigResponseDataAttributes.attributeTypeMap = {
    accountId: {
        baseName: "account_id",
        type: "string",
    },
    bucketName: {
        baseName: "bucket_name",
        type: "string",
    },
    createdAt: {
        baseName: "created_at",
        type: "string",
    },
    dataset: {
        baseName: "dataset",
        type: "string",
    },
    errorMessages: {
        baseName: "error_messages",
        type: "Array<string>",
    },
    exportPrefix: {
        baseName: "export_prefix",
        type: "string",
    },
    exportProjectName: {
        baseName: "export_project_name",
        type: "string",
    },
    months: {
        baseName: "months",
        type: "number",
        format: "int64",
    },
    projectId: {
        baseName: "project_id",
        type: "string",
    },
    serviceAccount: {
        baseName: "service_account",
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
    updatedAt: {
        baseName: "updated_at",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GcpUcConfigResponseDataAttributes.js.map