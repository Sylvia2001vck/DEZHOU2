"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineGooglePubSubSource = void 0;
/**
 * The `google_pubsub` source ingests logs from a Google Cloud Pub/Sub subscription.
 *
 * **Supported pipeline types:** logs
 */
class ObservabilityPipelineGooglePubSubSource {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineGooglePubSubSource.attributeTypeMap;
    }
}
exports.ObservabilityPipelineGooglePubSubSource = ObservabilityPipelineGooglePubSubSource;
/**
 * @ignore
 */
ObservabilityPipelineGooglePubSubSource.attributeTypeMap = {
    auth: {
        baseName: "auth",
        type: "ObservabilityPipelineGcpAuth",
    },
    decoding: {
        baseName: "decoding",
        type: "ObservabilityPipelineDecoding",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    project: {
        baseName: "project",
        type: "string",
        required: true,
    },
    subscription: {
        baseName: "subscription",
        type: "string",
        required: true,
    },
    tls: {
        baseName: "tls",
        type: "ObservabilityPipelineTls",
    },
    type: {
        baseName: "type",
        type: "ObservabilityPipelineGooglePubSubSourceType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineGooglePubSubSource.js.map