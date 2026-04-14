"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsArchiveDestinationAzure = void 0;
/**
 * The Azure archive destination.
 */
class LogsArchiveDestinationAzure {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsArchiveDestinationAzure.attributeTypeMap;
    }
}
exports.LogsArchiveDestinationAzure = LogsArchiveDestinationAzure;
/**
 * @ignore
 */
LogsArchiveDestinationAzure.attributeTypeMap = {
    container: {
        baseName: "container",
        type: "string",
        required: true,
    },
    integration: {
        baseName: "integration",
        type: "LogsArchiveIntegrationAzure",
        required: true,
    },
    path: {
        baseName: "path",
        type: "string",
    },
    region: {
        baseName: "region",
        type: "string",
    },
    storageAccount: {
        baseName: "storage_account",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "LogsArchiveDestinationAzureType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsArchiveDestinationAzure.js.map