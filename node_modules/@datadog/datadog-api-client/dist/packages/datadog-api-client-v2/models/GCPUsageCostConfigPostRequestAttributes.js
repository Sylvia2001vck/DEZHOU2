"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCPUsageCostConfigPostRequestAttributes = void 0;
/**
 * Attributes for Google Cloud Usage Cost config post request.
 */
class GCPUsageCostConfigPostRequestAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GCPUsageCostConfigPostRequestAttributes.attributeTypeMap;
    }
}
exports.GCPUsageCostConfigPostRequestAttributes = GCPUsageCostConfigPostRequestAttributes;
/**
 * @ignore
 */
GCPUsageCostConfigPostRequestAttributes.attributeTypeMap = {
    billingAccountId: {
        baseName: "billing_account_id",
        type: "string",
        required: true,
    },
    bucketName: {
        baseName: "bucket_name",
        type: "string",
        required: true,
    },
    exportDatasetName: {
        baseName: "export_dataset_name",
        type: "string",
        required: true,
    },
    exportPrefix: {
        baseName: "export_prefix",
        type: "string",
    },
    exportProjectName: {
        baseName: "export_project_name",
        type: "string",
        required: true,
    },
    serviceAccount: {
        baseName: "service_account",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GCPUsageCostConfigPostRequestAttributes.js.map