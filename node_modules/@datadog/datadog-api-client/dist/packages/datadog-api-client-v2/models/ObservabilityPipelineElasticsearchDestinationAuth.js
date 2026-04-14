"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineElasticsearchDestinationAuth = void 0;
/**
 * Authentication settings for the Elasticsearch destination.
 * When `strategy` is `basic`, use `username_key` and `password_key` to reference credentials stored in environment variables or secrets.
 */
class ObservabilityPipelineElasticsearchDestinationAuth {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineElasticsearchDestinationAuth.attributeTypeMap;
    }
}
exports.ObservabilityPipelineElasticsearchDestinationAuth = ObservabilityPipelineElasticsearchDestinationAuth;
/**
 * @ignore
 */
ObservabilityPipelineElasticsearchDestinationAuth.attributeTypeMap = {
    passwordKey: {
        baseName: "password_key",
        type: "string",
    },
    strategy: {
        baseName: "strategy",
        type: "ObservabilityPipelineAmazonOpenSearchDestinationAuthStrategy",
        required: true,
    },
    usernameKey: {
        baseName: "username_key",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineElasticsearchDestinationAuth.js.map