"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsArchiveDestinationS3 = void 0;
/**
 * The S3 archive destination.
 */
class LogsArchiveDestinationS3 {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsArchiveDestinationS3.attributeTypeMap;
    }
}
exports.LogsArchiveDestinationS3 = LogsArchiveDestinationS3;
/**
 * @ignore
 */
LogsArchiveDestinationS3.attributeTypeMap = {
    bucket: {
        baseName: "bucket",
        type: "string",
        required: true,
    },
    encryption: {
        baseName: "encryption",
        type: "LogsArchiveEncryptionS3",
    },
    integration: {
        baseName: "integration",
        type: "LogsArchiveIntegrationS3",
        required: true,
    },
    path: {
        baseName: "path",
        type: "string",
    },
    storageClass: {
        baseName: "storage_class",
        type: "LogsArchiveStorageClassS3Type",
    },
    type: {
        baseName: "type",
        type: "LogsArchiveDestinationS3Type",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsArchiveDestinationS3.js.map