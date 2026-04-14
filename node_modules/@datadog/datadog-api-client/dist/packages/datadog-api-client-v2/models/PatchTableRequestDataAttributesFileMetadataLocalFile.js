"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchTableRequestDataAttributesFileMetadataLocalFile = void 0;
/**
 * Local file metadata for patch requests using upload ID.
 */
class PatchTableRequestDataAttributesFileMetadataLocalFile {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PatchTableRequestDataAttributesFileMetadataLocalFile.attributeTypeMap;
    }
}
exports.PatchTableRequestDataAttributesFileMetadataLocalFile = PatchTableRequestDataAttributesFileMetadataLocalFile;
/**
 * @ignore
 */
PatchTableRequestDataAttributesFileMetadataLocalFile.attributeTypeMap = {
    uploadId: {
        baseName: "upload_id",
        type: "string",
        required: true,
    },
};
//# sourceMappingURL=PatchTableRequestDataAttributesFileMetadataLocalFile.js.map