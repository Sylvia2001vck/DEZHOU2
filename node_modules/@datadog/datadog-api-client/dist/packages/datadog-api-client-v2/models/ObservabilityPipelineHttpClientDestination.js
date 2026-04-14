"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineHttpClientDestination = void 0;
/**
 * The `http_client` destination sends data to an HTTP endpoint.
 *
 * **Supported pipeline types:** logs, metrics
 */
class ObservabilityPipelineHttpClientDestination {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineHttpClientDestination.attributeTypeMap;
    }
}
exports.ObservabilityPipelineHttpClientDestination = ObservabilityPipelineHttpClientDestination;
/**
 * @ignore
 */
ObservabilityPipelineHttpClientDestination.attributeTypeMap = {
    authStrategy: {
        baseName: "auth_strategy",
        type: "ObservabilityPipelineHttpClientDestinationAuthStrategy",
    },
    compression: {
        baseName: "compression",
        type: "ObservabilityPipelineHttpClientDestinationCompression",
    },
    customKey: {
        baseName: "custom_key",
        type: "string",
    },
    encoding: {
        baseName: "encoding",
        type: "ObservabilityPipelineHttpClientDestinationEncoding",
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
    passwordKey: {
        baseName: "password_key",
        type: "string",
    },
    tls: {
        baseName: "tls",
        type: "ObservabilityPipelineTls",
    },
    tokenKey: {
        baseName: "token_key",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "ObservabilityPipelineHttpClientDestinationType",
        required: true,
    },
    uriKey: {
        baseName: "uri_key",
        type: "string",
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
//# sourceMappingURL=ObservabilityPipelineHttpClientDestination.js.map