"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineAmazonS3Destination = void 0;
/**
 * The `amazon_s3` destination sends your logs in Datadog-rehydratable format to an Amazon S3 bucket for archiving.
 *
 * **Supported pipeline types:** logs
 */
class ObservabilityPipelineAmazonS3Destination {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineAmazonS3Destination.attributeTypeMap;
    }
}
exports.ObservabilityPipelineAmazonS3Destination = ObservabilityPipelineAmazonS3Destination;
/**
 * @ignore
 */
ObservabilityPipelineAmazonS3Destination.attributeTypeMap = {
    auth: {
        baseName: "auth",
        type: "ObservabilityPipelineAwsAuth",
    },
    bucket: {
        baseName: "bucket",
        type: "string",
        required: true,
    },
    buffer: {
        baseName: "buffer",
        type: "ObservabilityPipelineBufferOptions",
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    inputs: {
        baseName: "inputs",
        type: "Array<string>",
        required: true,
    },
    keyPrefix: {
        baseName: "key_prefix",
        type: "string",
    },
    region: {
        baseName: "region",
        type: "string",
        required: true,
    },
    storageClass: {
        baseName: "storage_class",
        type: "ObservabilityPipelineAmazonS3DestinationStorageClass",
        required: true,
    },
    tls: {
        baseName: "tls",
        type: "ObservabilityPipelineTls",
    },
    type: {
        baseName: "type",
        type: "ObservabilityPipelineAmazonS3DestinationType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineAmazonS3Destination.js.map