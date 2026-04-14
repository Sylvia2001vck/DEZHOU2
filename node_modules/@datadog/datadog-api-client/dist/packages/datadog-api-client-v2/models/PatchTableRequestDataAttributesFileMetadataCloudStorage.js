"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchTableRequestDataAttributesFileMetadataCloudStorage = void 0;
/**
 * Cloud storage file metadata for patch requests. Allows partial updates of access_details and sync_enabled.
 */
class PatchTableRequestDataAttributesFileMetadataCloudStorage {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PatchTableRequestDataAttributesFileMetadataCloudStorage.attributeTypeMap;
    }
}
exports.PatchTableRequestDataAttributesFileMetadataCloudStorage = PatchTableRequestDataAttributesFileMetadataCloudStorage;
/**
 * @ignore
 */
PatchTableRequestDataAttributesFileMetadataCloudStorage.attributeTypeMap = {
    accessDetails: {
        baseName: "access_details",
        type: "PatchTableRequestDataAttributesFileMetadataOneOfAccessDetails",
    },
    syncEnabled: {
        baseName: "sync_enabled",
        type: "boolean",
    },
};
//# sourceMappingURL=PatchTableRequestDataAttributesFileMetadataCloudStorage.js.map