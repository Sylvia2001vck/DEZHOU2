"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsArchiveEncryptionS3 = void 0;
/**
 * The S3 encryption settings.
 */
class LogsArchiveEncryptionS3 {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsArchiveEncryptionS3.attributeTypeMap;
    }
}
exports.LogsArchiveEncryptionS3 = LogsArchiveEncryptionS3;
/**
 * @ignore
 */
LogsArchiveEncryptionS3.attributeTypeMap = {
    key: {
        baseName: "key",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "LogsArchiveEncryptionS3Type",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsArchiveEncryptionS3.js.map