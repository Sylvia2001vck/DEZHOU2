"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineGooglePubSubDestination = void 0;
/**
 * The `google_pubsub` destination publishes logs to a Google Cloud Pub/Sub topic.
 *
 * **Supported pipeline types:** logs
 */
class ObservabilityPipelineGooglePubSubDestination {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineGooglePubSubDestination.attributeTypeMap;
    }
}
exports.ObservabilityPipelineGooglePubSubDestination = ObservabilityPipelineGooglePubSubDestination;
/**
 * @ignore
 */
ObservabilityPipelineGooglePubSubDestination.attributeTypeMap = {
    auth: {
        baseName: "auth",
        type: "ObservabilityPipelineGcpAuth",
    },
    buffer: {
        baseName: "buffer",
        type: "ObservabilityPipelineBufferOptions",
    },
    encoding: {
        baseName: "encoding",
        type: "ObservabilityPipelineGooglePubSubDestinationEncoding",
        required: true,
    },
    endpointUrlKey: {
        baseName: "endpoint_url_key",
        type: "string",
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
    project: {
        baseName: "project",
        type: "string",
        required: true,
    },
    tls: {
        baseName: "tls",
        type: "ObservabilityPipelineTls",
    },
    topic: {
        baseName: "topic",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "ObservabilityPipelineGooglePubSubDestinationType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineGooglePubSubDestination.js.map