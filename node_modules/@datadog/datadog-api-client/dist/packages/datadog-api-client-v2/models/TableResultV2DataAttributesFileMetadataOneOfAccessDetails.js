"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableResultV2DataAttributesFileMetadataOneOfAccessDetails = void 0;
/**
 * Cloud storage access configuration for the reference table data file.
 */
class TableResultV2DataAttributesFileMetadataOneOfAccessDetails {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TableResultV2DataAttributesFileMetadataOneOfAccessDetails.attributeTypeMap;
    }
}
exports.TableResultV2DataAttributesFileMetadataOneOfAccessDetails = TableResultV2DataAttributesFileMetadataOneOfAccessDetails;
/**
 * @ignore
 */
TableResultV2DataAttributesFileMetadataOneOfAccessDetails.attributeTypeMap = {
    awsDetail: {
        baseName: "aws_detail",
        type: "TableResultV2DataAttributesFileMetadataOneOfAccessDetailsAwsDetail",
    },
    azureDetail: {
        baseName: "azure_detail",
        type: "TableResultV2DataAttributesFileMetadataOneOfAccessDetailsAzureDetail",
    },
    gcpDetail: {
        baseName: "gcp_detail",
        type: "TableResultV2DataAttributesFileMetadataOneOfAccessDetailsGcpDetail",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TableResultV2DataAttributesFileMetadataOneOfAccessDetails.js.map