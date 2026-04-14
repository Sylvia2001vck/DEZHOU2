"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchTableRequestDataAttributesFileMetadataOneOfAccessDetails = void 0;
/**
 * Cloud storage access configuration for the reference table data file.
 */
class PatchTableRequestDataAttributesFileMetadataOneOfAccessDetails {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PatchTableRequestDataAttributesFileMetadataOneOfAccessDetails.attributeTypeMap;
    }
}
exports.PatchTableRequestDataAttributesFileMetadataOneOfAccessDetails = PatchTableRequestDataAttributesFileMetadataOneOfAccessDetails;
/**
 * @ignore
 */
PatchTableRequestDataAttributesFileMetadataOneOfAccessDetails.attributeTypeMap = {
    awsDetail: {
        baseName: "aws_detail",
        type: "PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsAwsDetail",
    },
    azureDetail: {
        baseName: "azure_detail",
        type: "PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsAzureDetail",
    },
    gcpDetail: {
        baseName: "gcp_detail",
        type: "PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsGcpDetail",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=PatchTableRequestDataAttributesFileMetadataOneOfAccessDetails.js.map