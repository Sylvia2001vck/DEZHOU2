/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineDecoding } from "./ObservabilityPipelineDecoding";
import { ObservabilityPipelineHttpClientSourceAuthStrategy } from "./ObservabilityPipelineHttpClientSourceAuthStrategy";
import { ObservabilityPipelineHttpClientSourceType } from "./ObservabilityPipelineHttpClientSourceType";
import { ObservabilityPipelineTls } from "./ObservabilityPipelineTls";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * The `http_client` source scrapes logs from HTTP endpoints at regular intervals.
 *
 * **Supported pipeline types:** logs
 */
export declare class ObservabilityPipelineHttpClientSource {
    /**
     * Optional authentication strategy for HTTP requests.
     */
    "authStrategy"?: ObservabilityPipelineHttpClientSourceAuthStrategy;
    /**
     * Name of the environment variable or secret that holds a custom header value (used with custom auth strategies).
     */
    "customKey"?: string;
    /**
     * The decoding format used to interpret incoming logs.
     */
    "decoding": ObservabilityPipelineDecoding;
    /**
     * Name of the environment variable or secret that holds the HTTP endpoint URL to scrape.
     */
    "endpointUrlKey"?: string;
    /**
     * The unique identifier for this component. Used in other parts of the pipeline to reference this component (for example, as the `input` to downstream components).
     */
    "id": string;
    /**
     * Name of the environment variable or secret that holds the password (used when `auth_strategy` is `basic`).
     */
    "passwordKey"?: string;
    /**
     * The interval (in seconds) between HTTP scrape requests.
     */
    "scrapeIntervalSecs"?: number;
    /**
     * The timeout (in seconds) for each scrape request.
     */
    "scrapeTimeoutSecs"?: number;
    /**
     * Configuration for enabling TLS encryption between the pipeline component and external services.
     */
    "tls"?: ObservabilityPipelineTls;
    /**
     * Name of the environment variable or secret that holds the bearer token (used when `auth_strategy` is `bearer`).
     */
    "tokenKey"?: string;
    /**
     * The source type. The value should always be `http_client`.
     */
    "type": ObservabilityPipelineHttpClientSourceType;
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
