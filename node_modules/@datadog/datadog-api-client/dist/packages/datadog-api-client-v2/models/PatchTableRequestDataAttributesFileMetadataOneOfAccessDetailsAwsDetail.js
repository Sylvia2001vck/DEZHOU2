"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsAwsDetail = void 0;
/**
 * Amazon Web Services S3 storage access configuration.
 */
class PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsAwsDetail {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsAwsDetail.attributeTypeMap;
    }
}
exports.PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsAwsDetail = PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsAwsDetail;
/**
 * @ignore
 */
PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsAwsDetail.attributeTypeMap = {
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
//# sourceMappingURL=PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsAwsDetail.js.map