"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsArchiveIntegrationS3 = void 0;
/**
 * The S3 Archive's integration destination.
 */
class LogsArchiveIntegrationS3 {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsArchiveIntegrationS3.attributeTypeMap;
    }
}
exports.LogsArchiveIntegrationS3 = LogsArchiveIntegrationS3;
/**
 * @ignore
 */
LogsArchiveIntegrationS3.attributeTypeMap = {
    accountId: {
        baseName: "account_id",
        type: "string",
        required: true,
    },
    roleName: {
        baseName: "role_name",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsArchiveIntegrationS3.js.map