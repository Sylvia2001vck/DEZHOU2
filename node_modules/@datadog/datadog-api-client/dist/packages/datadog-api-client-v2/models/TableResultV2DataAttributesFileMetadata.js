"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableResultV2DataAttributesFileMetadata = void 0;
/**
 * Metadata specifying where and how to access the reference table's data file.
 *
 * For cloud storage tables (S3/GCS/Azure):
 *   - sync_enabled and access_details will always be present
 *   - error fields (error_message, error_row_count, error_type) are present only when errors occur
 *
 * For local file tables:
 *   - error fields (error_message, error_row_count) are present only when errors occur
 *   - sync_enabled, access_details are never present
 */
class TableResultV2DataAttributesFileMetadata {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TableResultV2DataAttributesFileMetadata.attributeTypeMap;
    }
}
exports.TableResultV2DataAttributesFileMetadata = TableResultV2DataAttributesFileMetadata;
/**
 * @ignore
 */
TableResultV2DataAttributesFileMetadata.attributeTypeMap = {
    accessDetails: {
        baseName: "access_details",
        type: "TableResultV2DataAttributesFileMetadataOneOfAccessDetails",
    },
    errorMessage: {
        baseName: "error_message",
        type: "string",
    },
    errorRowCount: {
        baseName: "error_row_count",
        type: "number",
        format: "int64",
    },
    errorType: {
        baseName: "error_type",
        type: "TableResultV2DataAttributesFileMetadataCloudStorageErrorType",
    },
    syncEnabled: {
        baseName: "sync_enabled",
        type: "boolean",
    },
};
//# sourceMappingURL=TableResultV2DataAttributesFileMetadata.js.map