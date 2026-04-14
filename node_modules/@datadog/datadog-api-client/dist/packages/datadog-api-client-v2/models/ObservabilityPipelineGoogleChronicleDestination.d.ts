/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineBufferOptions } from "./ObservabilityPipelineBufferOptions";
import { ObservabilityPipelineGcpAuth } from "./ObservabilityPipelineGcpAuth";
import { ObservabilityPipelineGoogleChronicleDestinationEncoding } from "./ObservabilityPipelineGoogleChronicleDestinationEncoding";
import { ObservabilityPipelineGoogleChronicleDestinationType } from "./ObservabilityPipelineGoogleChronicleDestinationType";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * The `google_chronicle` destination sends logs to Google Chronicle.
 *
 * **Supported pipeline types:** logs
 */
export declare class ObservabilityPipelineGoogleChronicleDestination {
    /**
     * Google Cloud credentials used to authenticate with Google Cloud Storage.
     */
    "auth"?: ObservabilityPipelineGcpAuth;
    /**
     * Configuration for buffer settings on destination components.
     */
    "buffer"?: ObservabilityPipelineBufferOptions;
    /**
     * The Google Chronicle customer ID.
     */
    "customerId": string;
    /**
     * The encoding format for the logs sent to Chronicle.
     */
    "encoding"?: ObservabilityPipelineGoogleChronicleDestinationEncoding;
    /**
     * Name of the environment variable or secret that holds the Google Chronicle endpoint URL.
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
     * The log type metadata associated with the Chronicle destination.
     */
    "logType"?: string;
    /**
     * The destination type. The value should always be `google_chronicle`.
     */
    "type": ObservabilityPipelineGoogleChronicleDestinationType;
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
