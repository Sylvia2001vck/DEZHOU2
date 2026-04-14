/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineBufferOptions } from "./ObservabilityPipelineBufferOptions";
import { ObservabilityPipelineSentinelOneDestinationRegion } from "./ObservabilityPipelineSentinelOneDestinationRegion";
import { ObservabilityPipelineSentinelOneDestinationType } from "./ObservabilityPipelineSentinelOneDestinationType";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * The `sentinel_one` destination sends logs to SentinelOne.
 *
 * **Supported pipeline types:** logs
 */
export declare class ObservabilityPipelineSentinelOneDestination {
    /**
     * Configuration for buffer settings on destination components.
     */
    "buffer"?: ObservabilityPipelineBufferOptions;
    /**
     * The unique identifier for this component.
     */
    "id": string;
    /**
     * A list of component IDs whose output is used as the `input` for this component.
     */
    "inputs": Array<string>;
    /**
     * The SentinelOne region to send logs to.
     */
    "region": ObservabilityPipelineSentinelOneDestinationRegion;
    /**
     * Name of the environment variable or secret that holds the SentinelOne API token.
     */
    "tokenKey"?: string;
    /**
     * The destination type. The value should always be `sentinel_one`.
     */
    "type": ObservabilityPipelineSentinelOneDestinationType;
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
