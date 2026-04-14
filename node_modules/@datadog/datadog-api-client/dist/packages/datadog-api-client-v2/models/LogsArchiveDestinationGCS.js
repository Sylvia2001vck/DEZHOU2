"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsArchiveDestinationGCS = void 0;
/**
 * The GCS archive destination.
 */
class LogsArchiveDestinationGCS {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsArchiveDestinationGCS.attributeTypeMap;
    }
}
exports.LogsArchiveDestinationGCS = LogsArchiveDestinationGCS;
/**
 * @ignore
 */
LogsArchiveDestinationGCS.attributeTypeMap = {
    bucket: {
        baseName: "bucket",
        type: "string",
        required: true,
    },
    integration: {
        baseName: "integration",
        type: "LogsArchiveIntegrationGCS",
        required: true,
    },
    path: {
        baseName: "path",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "LogsArchiveDestinationGCSType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsArchiveDestinationGCS.js.map