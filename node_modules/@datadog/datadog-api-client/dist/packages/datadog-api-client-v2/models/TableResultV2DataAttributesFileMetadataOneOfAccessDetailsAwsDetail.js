"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableResultV2DataAttributesFileMetadataOneOfAccessDetailsAwsDetail = void 0;
/**
 * Amazon Web Services S3 storage access configuration.
 */
class TableResultV2DataAttributesFileMetadataOneOfAccessDetailsAwsDetail {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TableResultV2DataAttributesFileMetadataOneOfAccessDetailsAwsDetail.attributeTypeMap;
    }
}
exports.TableResultV2DataAttributesFileMetadataOneOfAccessDetailsAwsDetail = TableResultV2DataAttributesFileMetadataOneOfAccessDetailsAwsDetail;
/**
 * @ignore
 */
TableResultV2DataAttributesFileMetadataOneOfAccessDetailsAwsDetail.attributeTypeMap = {
    awsAccountId: {
        baseName: "aws_account_id",
        type: "string",
    },
    awsBucketName: {
        baseName: "aws_bucket_name",
        type: "string",
    },
    filePath: {
        baseName: "file_path",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TableResultV2DataAttributesFileMetadataOneOfAccessDetailsAwsDetail.js.map