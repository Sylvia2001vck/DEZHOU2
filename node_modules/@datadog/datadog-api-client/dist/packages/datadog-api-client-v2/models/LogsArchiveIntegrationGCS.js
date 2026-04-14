"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsArchiveIntegrationGCS = void 0;
/**
 * The GCS archive's integration destination.
 */
class LogsArchiveIntegrationGCS {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsArchiveIntegrationGCS.attributeTypeMap;
    }
}
exports.LogsArchiveIntegrationGCS = LogsArchiveIntegrationGCS;
/**
 * @ignore
 */
LogsArchiveIntegrationGCS.attributeTypeMap = {
    clientEmail: {
        baseName: "client_email",
        type: "string",
        required: true,
    },
    projectId: {
        baseName: "project_id",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsArchiveIntegrationGCS.js.map