"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineGoogleCloudStorageDestination = void 0;
/**
 * The `google_cloud_storage` destination stores logs in a Google Cloud Storage (GCS) bucket.
 * It requires a bucket name, Google Cloud authentication, and metadata fields.
 *
 * **Supported pipeline types:** logs
 */
class ObservabilityPipelineGoogleCloudStorageDestination {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineGoogleCloudStorageDestination.attributeTypeMap;
    }
}
exports.ObservabilityPipelineGoogleCloudStorageDestination = ObservabilityPipelineGoogleCloudStorageDestination;
/**
 * @ignore
 */
ObservabilityPipelineGoogleCloudStorageDestination.attributeTypeMap = {
    acl: {
        baseName: "acl",
        type: "ObservabilityPipelineGoogleCloudStorageDestinationAcl",
    },
    auth: {
        baseName: "auth",
        type: "ObservabilityPipelineGcpAuth",
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
    metadata: {
        baseName: "metadata",
        type: "Array<ObservabilityPipelineMetadataEntry>",
    },
    storageClass: {
        baseName: "storage_class",
        type: "ObservabilityPipelineGoogleCloudStorageDestinationStorageClass",
        required: true,
    },
    type: {
        baseName: "type",
        type: "ObservabilityPipelineGoogleCloudStorageDestinationType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineGoogleCloudStorageDestination.js.map