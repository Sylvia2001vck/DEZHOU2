"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableResultV2DataAttributesFileMetadataOneOfAccessDetailsGcpDetail = void 0;
/**
 * Google Cloud Platform storage access configuration.
 */
class TableResultV2DataAttributesFileMetadataOneOfAccessDetailsGcpDetail {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TableResultV2DataAttributesFileMetadataOneOfAccessDetailsGcpDetail.attributeTypeMap;
    }
}
exports.TableResultV2DataAttributesFileMetadataOneOfAccessDetailsGcpDetail = TableResultV2DataAttributesFileMetadataOneOfAccessDetailsGcpDetail;
/**
 * @ignore
 */
TableResultV2DataAttributesFileMetadataOneOfAccessDetailsGcpDetail.attributeTypeMap = {
    filePath: {
        baseName: "file_path",
        type: "string",
    },
    gcpBucketName: {
        baseName: "gcp_bucket_name",
        type: "string",
    },
    gcpProjectId: {
        baseName: "gcp_project_id",
        type: "string",
    },
    gcpServiceAccountEmail: {
        baseName: "gcp_service_account_email",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TableResultV2DataAttributesFileMetadataOneOfAccessDetailsGcpDetail.js.map