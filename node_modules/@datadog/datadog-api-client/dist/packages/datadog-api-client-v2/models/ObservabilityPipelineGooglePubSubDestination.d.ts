/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineBufferOptions } from "./ObservabilityPipelineBufferOptions";
import { ObservabilityPipelineGcpAuth } from "./ObservabilityPipelineGcpAuth";
import { ObservabilityPipelineGooglePubSubDestinationEncoding } from "./ObservabilityPipelineGooglePubSubDestinationEncoding";
import { ObservabilityPipelineGooglePubSubDestinationType } from "./ObservabilityPipelineGooglePubSubDestinationType";
import { ObservabilityPipelineTls } from "./ObservabilityPipelineTls";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * The `google_pubsub` destination publishes logs to a Google Cloud Pub/Sub topic.
 *
 * **Supported pipeline types:** logs
 */
export declare class ObservabilityPipelineGooglePubSubDestination {
    /**
     * Google Cloud credentials used to authenticate with Google Cloud Storage.
     */
    "auth"?: ObservabilityPipelineGcpAuth;
    /**
     * Configuration for buffer settings on destination components.
     */
    "buffer"?: ObservabilityPipelineBufferOptions;
    /**
     * Encoding format for log events.
     */
    "encoding": ObservabilityPipelineGooglePubSubDestinationEncoding;
    /**
     * Name of the environment variable or secret that holds the Google Cloud Pub/Sub endpoint URL.
     */
    "endpointUrlKey"?: string;
    /**
     * The unique identifier for this component.
     */
    "id": string;
    /**
     * A list of component IDs whose output is used as the `input` for this component.
     */
    "inputs": Array<string>;
    /**
     * The Google Cloud project ID that owns the Pub/Sub topic.
     */
    "project": string;
    /**
     * Configuration for enabling TLS encryption between the pipeline component and external services.
     */
    "tls"?: ObservabilityPipelineTls;
    /**
     * The Pub/Sub topic name to publish logs to.
     */
    "topic": string;
    /**
     * The destination type. The value should always be `google_pubsub`.
     */
    "type": ObservabilityPipelineGooglePubSubDestinationType;
    /**
     * A container for additional, undeclared properties.
     * This is a holder for any undeclared properties as specified with
     * the 'additionalProperties' keyword in the OAS document.
     */
    "additionalProperties"?: {
        [key: string]: any;
    };
    /**
     * @ignore
     */
    "_unparsed"?: boolean;
    /**
     * @ignore
     */
    static readonly attributeTypeMap: AttributeTypeMap;
    /**
     * @ignore
     */
    static getAttributeTypeMap(): AttributeTypeMap;
    constructor();
}
