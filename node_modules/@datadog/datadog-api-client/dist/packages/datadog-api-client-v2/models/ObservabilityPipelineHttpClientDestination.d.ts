/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineHttpClientDestinationAuthStrategy } from "./ObservabilityPipelineHttpClientDestinationAuthStrategy";
import { ObservabilityPipelineHttpClientDestinationCompression } from "./ObservabilityPipelineHttpClientDestinationCompression";
import { ObservabilityPipelineHttpClientDestinationEncoding } from "./ObservabilityPipelineHttpClientDestinationEncoding";
import { ObservabilityPipelineHttpClientDestinationType } from "./ObservabilityPipelineHttpClientDestinationType";
import { ObservabilityPipelineTls } from "./ObservabilityPipelineTls";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * The `http_client` destination sends data to an HTTP endpoint.
 *
 * **Supported pipeline types:** logs, metrics
 */
export declare class ObservabilityPipelineHttpClientDestination {
    /**
     * HTTP authentication strategy.
     */
    "authStrategy"?: ObservabilityPipelineHttpClientDestinationAuthStrategy;
    /**
     * Compression configuration for HTTP requests.
     */
    "compression"?: ObservabilityPipelineHttpClientDestinationCompression;
    /**
     * Name of the environment variable or secret that holds a custom header value (used with custom auth strategies).
     */
    "customKey"?: string;
    /**
     * Encoding format for log events.
     */
    "encoding": ObservabilityPipelineHttpClientDestinationEncoding;
    /**
     * The unique identifier for this component.
     */
    "id": string;
    /**
     * A list of component IDs whose output is used as the input for this component.
     */
    "inputs": Array<string>;
    /**
     * Name of the environment variable or secret that holds the password (used when `auth_strategy` is `basic`).
     */
    "passwordKey"?: string;
    /**
     * Configuration for enabling TLS encryption between the pipeline component and external services.
     */
    "tls"?: ObservabilityPipelineTls;
    /**
     * Name of the environment variable or secret that holds the bearer token (used when `auth_strategy` is `bearer`).
     */
    "tokenKey"?: string;
    /**
     * The destination type. The value should always be `http_client`.
     */
    "type": ObservabilityPipelineHttpClientDestinationType;
    /**
     * Name of the environment variable or secret that holds the HTTP endpoint URI.
     */
    "uriKey"?: string;
    /**
     * Name of the environment variable or secret that holds the username (used when `auth_strategy` is `basic`).
     */
    "usernameKey"?: string;
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
