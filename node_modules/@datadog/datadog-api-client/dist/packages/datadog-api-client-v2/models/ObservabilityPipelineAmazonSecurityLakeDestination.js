"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineAmazonSecurityLakeDestination = void 0;
/**
 * The `amazon_security_lake` destination sends your logs to Amazon Security Lake.
 *
 * **Supported pipeline types:** logs
 */
class ObservabilityPipelineAmazonSecurityLakeDestination {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineAmazonSecurityLakeDestination.attributeTypeMap;
    }
}
exports.ObservabilityPipelineAmazonSecurityLakeDestination = ObservabilityPipelineAmazonSecurityLakeDestination;
/**
 * @ignore
 */
ObservabilityPipelineAmazonSecurityLakeDestination.attributeTypeMap = {
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
    customSourceName: {
        baseName: "custom_source_name",
        type: "string",
        required: true,
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
        type: "ObservabilityPipelineAmazonSecurityLakeDestinationType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineAmazonSecurityLakeDestination.js.map