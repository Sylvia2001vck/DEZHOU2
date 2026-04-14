"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineAmazonDataFirehoseSource = void 0;
/**
 * The `amazon_data_firehose` source ingests logs from AWS Data Firehose.
 *
 * **Supported pipeline types:** logs
 */
class ObservabilityPipelineAmazonDataFirehoseSource {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineAmazonDataFirehoseSource.attributeTypeMap;
    }
}
exports.ObservabilityPipelineAmazonDataFirehoseSource = ObservabilityPipelineAmazonDataFirehoseSource;
/**
 * @ignore
 */
ObservabilityPipelineAmazonDataFirehoseSource.attributeTypeMap = {
    addressKey: {
        baseName: "address_key",
        type: "string",
    },
    auth: {
        baseName: "auth",
        type: "ObservabilityPipelineAwsAuth",
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    tls: {
        baseName: "tls",
        type: "ObservabilityPipelineTls",
    },
    type: {
        baseName: "type",
        type: "ObservabilityPipelineAmazonDataFirehoseSourceType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineAmazonDataFirehoseSource.js.map