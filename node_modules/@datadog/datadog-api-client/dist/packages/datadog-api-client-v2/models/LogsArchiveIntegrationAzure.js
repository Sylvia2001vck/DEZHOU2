"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsArchiveIntegrationAzure = void 0;
/**
 * The Azure archive's integration destination.
 */
class LogsArchiveIntegrationAzure {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsArchiveIntegrationAzure.attributeTypeMap;
    }
}
exports.LogsArchiveIntegrationAzure = LogsArchiveIntegrationAzure;
/**
 * @ignore
 */
LogsArchiveIntegrationAzure.attributeTypeMap = {
    clientId: {
        baseName: "client_id",
        type: "string",
        required: true,
    },
    tenantId: {
        baseName: "tenant_id",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsArchiveIntegrationAzure.js.map