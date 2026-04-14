"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineAmazonS3Source = void 0;
/**
 * The `amazon_s3` source ingests logs from an Amazon S3 bucket.
 * It supports AWS authentication and TLS encryption.
 *
 * **Supported pipeline types:** logs
 */
class ObservabilityPipelineAmazonS3Source {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineAmazonS3Source.attributeTypeMap;
    }
}
exports.ObservabilityPipelineAmazonS3Source = ObservabilityPipelineAmazonS3Source;
/**
 * @ignore
 */
ObservabilityPipelineAmazonS3Source.attributeTypeMap = {
    auth: {
        baseName: "auth",
        type: "ObservabilityPipelineAwsAuth",
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    region: {
        baseName: "region",
        type: "string",
        required: true,
    },
    tls: {
        baseName: "tls",
        type: "ObservabilityPipelineTls",
    },
    type: {
        baseName: "type",
        type: "ObservabilityPipelineAmazonS3SourceType",
        required: true,
    },
    urlKey: {
        baseName: "url_key",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineAmazonS3Source.js.map