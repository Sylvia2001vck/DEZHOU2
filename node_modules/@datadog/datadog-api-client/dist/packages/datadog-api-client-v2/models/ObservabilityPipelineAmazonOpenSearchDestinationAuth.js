"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineAmazonOpenSearchDestinationAuth = void 0;
/**
 * Authentication settings for the Amazon OpenSearch destination.
 * The `strategy` field determines whether basic or AWS-based authentication is used.
 */
class ObservabilityPipelineAmazonOpenSearchDestinationAuth {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineAmazonOpenSearchDestinationAuth.attributeTypeMap;
    }
}
exports.ObservabilityPipelineAmazonOpenSearchDestinationAuth = ObservabilityPipelineAmazonOpenSearchDestinationAuth;
/**
 * @ignore
 */
ObservabilityPipelineAmazonOpenSearchDestinationAuth.attributeTypeMap = {
    assumeRole: {
        baseName: "assume_role",
        type: "string",
    },
    awsRegion: {
        baseName: "aws_region",
        type: "string",
    },
    externalId: {
        baseName: "external_id",
        type: "string",
    },
    sessionName: {
        baseName: "session_name",
        type: "string",
    },
    strategy: {
        baseName: "strategy",
        type: "ObservabilityPipelineAmazonOpenSearchDestinationAuthStrategy",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineAmazonOpenSearchDestinationAuth.js.map